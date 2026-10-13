'use client';

import { useState } from 'react';
import { pricing } from '@/content/content';
import { SectionHeader } from './SectionHeader';

type Audience = (typeof pricing.audienceToggle)[number];
type Cycle = (typeof pricing.cycleToggle)[number];

function Segmented<T extends string>({
  options,
  value,
  onChange,
  label,
  badgeOn,
  badge,
}: {
  options: readonly T[];
  value: T;
  onChange: (next: T) => void;
  label: string;
  badgeOn?: T;
  badge?: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center gap-1 rounded-pill border border-line bg-card p-1 shadow-card"
    >
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option)}
            className={`btn rounded-pill px-4 py-2 text-[13.5px] transition-colors ${
              active
                ? 'bg-blue text-white'
                : 'bg-transparent text-fg-soft hover:text-fg'
            }`}
          >
            {option}
            {badge && badgeOn === option ? (
              <span
                className={`rounded-pill px-2 py-[3px] text-[10.5px] font-bold leading-none ${
                  active ? 'bg-white/20 text-white' : 'bg-blue-soft text-blue-deep'
                }`}
              >
                {badge}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export function Pricing() {
  const [audience, setAudience] = useState<Audience>('Individual');
  const [cycle, setCycle] = useState<Cycle>('Monthly');

  const tiers = pricing.tiers[audience];
  const yearly = cycle === 'Yearly';

  return (
    <section id="pricing" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow={pricing.eyebrow}
          heading={pricing.heading}
          subtext={pricing.subtext}
        />

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Segmented
            label="Plan audience"
            options={pricing.audienceToggle}
            value={audience}
            onChange={setAudience}
          />
          <Segmented
            label="Billing cycle"
            options={pricing.cycleToggle}
            value={cycle}
            onChange={setCycle}
            badgeOn="Yearly"
            badge={pricing.yearlyBadge}
          />
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => {
            const price = yearly ? tier.yearly : tier.monthly;
            const paid = tier.monthly > 0;

            return (
              <li
                key={tier.name}
                className={`card relative flex flex-col p-6 ${
                  tier.popular ? 'border-blue shadow-card-lg' : ''
                }`}
              >
                {tier.popular ? (
                  <span className="absolute -top-2.5 left-6 rounded-pill bg-blue px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white">
                    Most popular
                  </span>
                ) : null}

                <h3 className="text-[18px]">{tier.name}</h3>

                <p className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-[38px] font-extrabold leading-none tracking-[-0.04em] text-fg">
                    ${price}
                  </span>
                  <span className="text-[14px] font-medium text-muted">/mo</span>
                </p>

                <p className="mt-1 h-[16px] text-[11.5px] font-medium text-blue-deep">
                  {yearly && paid ? 'billed yearly' : ''}
                </p>

                <p className="mt-3 text-[13.5px] leading-[1.55] text-fg-soft">{tier.who}</p>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-[13.5px] leading-[1.5] text-fg-soft">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                      >
                        <path
                          d="m4 10.4 3.6 3.6L16 5.6"
                          stroke="var(--blue)"
                          strokeWidth="2.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#join"
                  className={`btn mt-6 w-full ${
                    tier.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {pricing.cta}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center">
          <a
            href={pricing.footLink.href}
            className="text-[14px] font-medium text-blue-deep underline-offset-4 hover:underline"
          >
            {pricing.footLink.label}
          </a>
        </p>
      </div>
    </section>
  );
}
