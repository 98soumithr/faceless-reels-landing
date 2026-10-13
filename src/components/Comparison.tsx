import { comparison } from '@/content/content';
import { SectionHeader } from './SectionHeader';

function XMark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <circle cx="10" cy="10" r="9" className="fill-line-strong" />
      <path
        d="m7 7 6 6M13 7l-6 6"
        stroke="var(--fg-soft)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckMark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <circle cx="10" cy="10" r="9" fill="var(--blue)" />
      <path
        d="m6 10.3 2.6 2.6 5.5-5.6"
        stroke="#fff"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Comparison() {
  return (
    <section className="section bg-bg-2">
      <div className="shell">
        <SectionHeader eyebrow={comparison.eyebrow} heading={comparison.heading} />

        <div className="relative mx-auto mt-12 grid max-w-[940px] items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
          {/* The old way */}
          <div className="card p-6 sm:p-7 lg:rounded-r-none">
            <h3 className="text-[19px]">{comparison.old.title}</h3>
            <ul className="mt-5 space-y-3.5">
              {comparison.old.items.map((item) => (
                <li key={item} className="flex gap-3 text-[14.5px] leading-[1.55] text-fg-soft">
                  <XMark />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-[14px] text-fg-soft">
              {comparison.old.footLabel}{' '}
              <strong className="font-semibold text-fg">{comparison.old.footValue}</strong>
            </p>
          </div>

          {/* Center callout */}
          <div className="flex items-center justify-center lg:w-[132px]">
            <span className="rounded-pill border border-line-strong bg-card px-4 py-2 text-center font-display text-[13px] font-extrabold tracking-[-0.01em] text-blue-deep shadow-card">
              {comparison.callout}
            </span>
          </div>

          {/* With Faceless Reels — highlighted */}
          <div className="card border-blue p-6 shadow-card-lg sm:p-7 lg:rounded-l-none">
            <h3 className="text-[19px]">{comparison.ours.title}</h3>
            <ul className="mt-5 space-y-3.5">
              {comparison.ours.items.map((item) => (
                <li key={item} className="flex gap-3 text-[14.5px] leading-[1.55] text-fg">
                  <CheckMark />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-[14px] text-fg-soft">
              {comparison.ours.footLabel}{' '}
              <strong className="font-semibold text-blue-deep">
                {comparison.ours.footValue}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
