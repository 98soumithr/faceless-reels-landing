'use client';

import { useId, useState } from 'react';
import { waitlist } from '@/content/content';

/**
 * Set NEXT_PUBLIC_WAITLIST_ENDPOINT in .env.local to a Formspree / Tally /
 * ConvertKit / Mailchimp form endpoint. See .env.example and README.md.
 *
 * While the placeholder is still in place the form short-circuits in dev so
 * the page stays demoable, but shows a real error in production rather than
 * silently swallowing signups.
 *
 * Visually this is the reference's hero CTA: one rounded-999px capsule with
 * an inline field + button. `tone` switches it between the dark hero and the
 * light closing section.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? '';
const IS_CONFIGURED = ENDPOINT.length > 0 && !ENDPOINT.includes('REPLACE_ME');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = 'idle' | 'invalid' | 'submitting' | 'success' | 'error';
type Tone = 'dark' | 'light';

const SHELL: Record<Tone, string> = {
  dark: 'border-white/25 bg-white/[0.12] shadow-[0_22px_60px_-18px_rgba(47,107,255,0.6)] backdrop-blur-xl',
  light:
    'border-hair bg-card shadow-[0_1px_2px_rgba(10,15,28,0.04),0_18px_40px_-24px_rgba(10,15,28,0.3)]',
};

const SHELL_ERROR: Record<Tone, string> = {
  dark: 'border-[rgba(255,150,150,0.75)] bg-white/[0.12] shadow-[0_22px_60px_-18px_rgba(47,107,255,0.6)] backdrop-blur-xl',
  light: 'border-[rgba(200,50,40,0.6)] bg-card',
};

const INPUT: Record<Tone, string> = {
  dark: 'text-white placeholder:text-white/45',
  light: 'text-ink placeholder:text-ink-faint',
};

const ERROR_TEXT: Record<Tone, string> = {
  dark: 'text-[#ffb0b0]',
  light: 'text-[#c23026]',
};

export function WaitlistForm({
  source,
  tone = 'dark',
  className = '',
}: {
  /** Recorded with the signup so hero vs closing CTA can be compared. */
  source: 'hero' | 'closing';
  /** Which background this sits on. */
  tone?: Tone;
  className?: string;
}) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const showError = status === 'invalid' || status === 'error';
  const errorText =
    status === 'invalid'
      ? waitlist.invalid
      : IS_CONFIGURED
        ? waitlist.failed
        : waitlist.unconfigured;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Don't double-submit.
    if (status === 'submitting' || status === 'success') return;

    // Bots fill hidden fields; humans don't. Pretend it worked.
    if (honeypot !== '') {
      setStatus('success');
      return;
    }

    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus('invalid');
      return;
    }

    if (!IS_CONFIGURED) {
      if (process.env.NODE_ENV === 'production') {
        setStatus('error');
        return;
      }
      console.warn(
        '[waitlist] NEXT_PUBLIC_WAITLIST_ENDPOINT is not set — signup was not stored.',
      );
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: value,
          source,
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus(response.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className={`mx-auto flex w-full max-w-[460px] items-center justify-center gap-2.5 rounded-full border px-5 py-[13px] text-left ${
          tone === 'dark'
            ? 'border-white/25 bg-white/[0.12] backdrop-blur-xl'
            : 'border-hair bg-card'
        } ${className}`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <circle cx="10" cy="10" r="10" fill="var(--accent)" />
          <path
            d="m5.75 10.4 2.6 2.6 5.9-5.9"
            stroke="#fff"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p
          className={`ui text-[14px] leading-[1.45] font-medium ${
            tone === 'dark' ? 'text-on-dark' : 'text-ink'
          }`}
        >
          {waitlist.success}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`mx-auto w-full max-w-[460px] ${className}`}
    >
      <label htmlFor={inputId} className="sr-only">
        {waitlist.label}
      </label>

      {/* Honeypot — hidden from people and from screen readers. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor={`${inputId}-hp`}>Company</label>
        <input
          id={`${inputId}-hp`}
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div
        className={`flex flex-col gap-2 rounded-[26px] border p-[6px] sm:flex-row sm:items-center sm:rounded-full ${
          showError ? SHELL_ERROR[tone] : SHELL[tone]
        }`}
      >
        <input
          id={inputId}
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder={waitlist.placeholder}
          value={email}
          aria-invalid={showError}
          aria-describedby={showError ? errorId : undefined}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle') setStatus('idle');
          }}
          className={`ui min-w-0 flex-1 bg-transparent px-5 py-3 text-[15px] outline-none ${INPUT[tone]}`}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`btn btn-lg w-full shrink-0 disabled:opacity-70 sm:w-auto ${
            tone === 'dark' ? 'btn-on-dark' : 'btn-ink'
          }`}
        >
          {status === 'submitting' ? 'Joining…' : waitlist.cta}
        </button>
      </div>

      {showError ? (
        <p
          id={errorId}
          role="alert"
          className={`ui mt-2.5 text-center text-[13px] font-medium ${ERROR_TEXT[tone]}`}
        >
          {errorText}
        </p>
      ) : null}
    </form>
  );
}
