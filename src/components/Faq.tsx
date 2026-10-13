import { faq } from '@/content/content';
import { SectionHeader } from './SectionHeader';

export function Faq() {
  return (
    <section id="faq" className="section bg-bg-2">
      <div className="shell">
        <SectionHeader eyebrow={faq.eyebrow} heading={faq.heading} />

        <div className="mx-auto mt-10 max-w-[760px] space-y-3">
          {faq.items.map((item, i) => (
            <details
              key={item.q}
              // First item opens by default.
              open={i === 0}
              className="faq-item card overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="text-[15.5px] font-bold leading-snug sm:text-[16.5px]">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="faq-sign grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-soft"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1.5v9M1.5 6h9"
                      stroke="var(--blue-deep)"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-5 pr-12 text-[14.5px] leading-[1.65] text-fg-soft sm:px-6 sm:pb-6">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
