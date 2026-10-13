'use client';

import { useState, type CSSProperties } from 'react';
import { pricing, type Tier } from '@/content/content';

type Audience = (typeof pricing.audienceToggle)[number];
type Cycle = (typeof pricing.cycleToggle)[number];

/**
 * Reference: a rich accent gradient mesh that shades to a much darker,
 * desaturated tone at the bottom. The reference is warm; ours is blue.
 */
const popularSurface: CSSProperties = {
  background:
    'radial-gradient(125% 90% at 18% -12%, #6f9dff 0%, rgba(111,157,255,0) 54%),' +
    'radial-gradient(70% 58% at 60% 14%, rgba(142,179,255,0.55) 0%, rgba(142,179,255,0) 58%),' +
    'radial-gradient(110% 82% at 112% 4%, #255ae6 0%, rgba(37,90,230,0) 56%),' +
    'radial-gradient(150% 116% at 50% 132%, #090f26 0%, rgba(9,15,38,0) 58%),' +
    'linear-gradient(170deg, #2f6bff 0%, #2857d8 42%, #14214e 100%)',
};

function Toggle<T extends string>({
  label,
  options,
  value,
  onChange,
  tone = 'ink',
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (next: T) => void;
  /** The active pill is solid ink on the billing toggle, accent on the audience toggle. */
  tone?: 'ink' | 'accent';
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="ui inline-flex items-center rounded-full bg-[rgba(10,15,28,0.06)] p-[5px]"
    >
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option)}
            className={`rounded-full px-[22px] py-[11px] text-[13px] leading-none transition-colors sm:px-[28px] ${
              active
                ? tone === 'accent'
                  ? 'bg-accent font-bold text-white'
                  : 'bg-ink font-semibold text-white'
                : 'font-medium text-ink-soft hover:text-ink'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function Tick({ popular }: { popular: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="mt-[4px] shrink-0"
    >
      <path
        d="m1.8 7.2 3.4 3.4L12.3 3.5"
        stroke={popular ? '#ffffff' : 'var(--accent)'}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TierCard({ tier, yearly }: { tier: Tier; yearly: boolean }) {
  const popular = Boolean(tier.popular);
  const price = yearly ? tier.yearly : tier.monthly;
  const showStrike = yearly && tier.monthly > tier.yearly;
  const showBilled = yearly && tier.monthly > 0;

  return (
    <li
      style={popular ? popularSurface : undefined}
      className={`relative flex flex-col rounded-[24px] p-6 xl:p-7 ${
        popular
          ? 'text-white shadow-[0_26px_60px_-28px_rgba(29,79,216,0.6)]'
          : 'bg-card shadow-[0_1px_2px_rgba(10,15,28,0.04),0_20px_48px_-30px_rgba(10,15,28,0.22)]'
      }`}
    >
      {popular ? (
        <span className="ui absolute top-[26px] right-6 rounded-full border border-white/35 px-[11px] py-[6px] text-[9.5px] leading-none font-bold tracking-[0.07em] text-white uppercase xl:right-7">
          Most popular
        </span>
      ) : null}

      {/* 1 · tier name (stays serif) */}
      <h3
        className={`text-[26px] leading-[1.1] font-semibold xl:text-[28px] ${
          popular ? 'pr-[104px] text-white' : 'text-ink'
        }`}
      >
        {tier.name}
      </h3>

      {/* 2 · one-line description — two lines reserved so every card's
          price, allowance field and divider land on the same baseline. */}
      <p
        className={`ui mt-3 min-h-[42px] text-[14.5px] leading-[1.45] ${
          popular ? 'text-white/70' : 'text-ink-soft'
        }`}
      >
        {tier.who}
      </p>

      {/* 3 · struck monthly price — space reserved in both modes */}
      <p className="ui mt-6 h-[20px] text-[14px] leading-[20px]">
        {showStrike ? (
          <>
            <span className="sr-only">Was </span>
            <s className={popular ? 'text-white/55' : 'text-ink-faint'}>
              ${tier.monthly}
              <span className="text-[12px]">/mo</span>
            </s>
          </>
        ) : null}
      </p>

      {/* 4 · the big price (sans) */}
      <p className="ui mt-[6px] flex items-baseline gap-2">
        <span
          className={`text-[52px] leading-[0.95] font-bold tracking-[-0.04em] xl:text-[58px] ${
            popular ? 'text-white' : 'text-ink'
          }`}
        >
          ${price}
        </span>
        <span className={`text-[14px] ${popular ? 'text-white/65' : 'text-ink-soft'}`}>/ mo</span>
      </p>

      {/* 5 · billed yearly — space reserved in both modes */}
      <p
        className={`ui mt-[10px] h-[18px] text-[13px] leading-[18px] ${
          popular ? 'text-white/65' : 'text-ink-faint'
        }`}
      >
        {showBilled ? pricing.billedYearly : ''}
      </p>

      {/* 6 · allowance field */}
      <div
        className={`ui mt-5 flex min-h-[52px] items-center rounded-[12px] px-4 py-3 text-[14.5px] leading-[1.35] font-medium ${
          popular
            ? 'border border-white/25 bg-white/15 text-white'
            : 'bg-[rgba(10,15,28,0.05)] text-ink'
        }`}
      >
        {tier.allowance}
      </div>

      {/* 7 · hairline */}
      <div className={`mt-6 border-t ${popular ? 'border-white/20' : 'border-hair'}`} />

      {/* 8 · features */}
      <ul className="ui mt-5 flex-1 space-y-[13px]">
        {tier.features.map((feature) => (
          <li key={feature.text}>
            <div className="flex gap-[10px]">
              <Tick popular={popular} />
              <span
                className={`text-[14.5px] leading-[1.45] ${popular ? 'text-white' : 'text-ink'}`}
              >
                {feature.text}
              </span>
            </div>
            {feature.sub ? (
              <p
                className={`mt-[3px] pl-[24px] text-[13px] leading-[1.45] ${
                  popular ? 'text-white/65' : 'text-ink-soft'
                }`}
              >
                {feature.sub}
              </p>
            ) : null}
          </li>
        ))}
      </ul>

      {/* 9 · full-width pill CTA */}
      <a
        href="#join"
        className={`btn mt-7 w-full py-[15px] text-[15px] font-semibold ${
          popular
            ? 'border border-white/30 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
            : 'btn-ink'
        }`}
      >
        {pricing.cta}
        <span className="sr-only"> — {tier.name}</span>
      </a>
    </li>
  );
}

export function Pricing() {
  const [audience, setAudience] = useState<Audience>('Individual');
  // No annual discount, so default to Monthly; Yearly just bills annually
  // at the same rate.
  const [cycle, setCycle] = useState<Cycle>('Monthly');

  const tiers = pricing.tiers[audience];
  const yearly = cycle === 'Yearly';

  return (
    <section id="pricing" className="bg-paper py-[88px] md:py-[116px]">
      <div className="shell">
        <h2 className="h2 text-center">
          {pricing.headingLead}
          <span className="accented">{pricing.headingAccent}</span>
        </h2>

        {/* ── toggles: billing centred, audience pinned to the right edge ── */}
        <div className="relative mt-[46px] flex flex-col items-center gap-6 pt-[18px] md:mt-[56px] lg:gap-0">
          <div className="relative">
            {pricing.yearlyBadge ? (
              <span className="ui absolute -top-[30px] left-1/2 z-10 -translate-x-1/2 rounded-full bg-accent px-[10px] py-[5px] text-[11px] leading-none font-bold tracking-[0.06em] whitespace-nowrap text-white uppercase">
                {pricing.yearlyBadge}
              </span>
            ) : null}
            <Toggle
              label="Billing cycle"
              options={pricing.cycleToggle}
              value={cycle}
              onChange={setCycle}
            />
          </div>

          <div className="lg:absolute lg:right-0 lg:bottom-0">
            <Toggle
              label="Plan audience"
              options={pricing.audienceToggle}
              value={audience}
              onChange={setAudience}
              tone="accent"
            />
          </div>
        </div>

        {/* ── tier cards ───────────────────────────────────────────── */}
        <ul className="mt-[44px] grid items-stretch gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} yearly={yearly} />
          ))}
        </ul>
      </div>
    </section>
  );
}
