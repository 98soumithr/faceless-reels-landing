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
 */
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? '';
const IS_CONFIGURED = ENDPOINT.length > 0 && !ENDPOINT.includes('REPLACE_ME');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = 'idle' | 'invalid' | 'submitting' | 'success' | 'error';

export function WaitlistForm({
  source,
  className = '',
}: {
  /** Recorded with the signup so hero vs closing CTA can be compared. */
  source: 'hero' | 'closing';
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
        className={`mx-auto flex max-w-[480px] items-center justify-center gap-2.5 rounded-pill border border-good/30 bg-good/10 px-5 py-3.5 text-left ${className}`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <circle cx="10" cy="10" r="10" fill="var(--good)" />
          <path
            d="m5.75 10.4 2.6 2.6 5.9-5.9"
            stroke="#fff"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-[14px] font-medium leading-[1.45] text-fg">
          {waitlist.success}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`mx-auto w-full max-w-[480px] ${className}`}
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
        className={`flex flex-col gap-2 rounded-[22px] border bg-card p-2 shadow-card sm:flex-row sm:items-center sm:rounded-pill ${
          showError ? 'border-red-400/70' : 'border-line'
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
          className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-[15px] text-fg outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary w-full shrink-0 sm:w-auto"
        >
          {status === 'submitting' ? 'Joining…' : waitlist.cta}
        </button>
      </div>

      {showError ? (
        <p id={errorId} role="alert" className="mt-2.5 text-[13px] font-medium text-red-500">
          {errorText}
        </p>
      ) : null}
    </form>
  );
}
