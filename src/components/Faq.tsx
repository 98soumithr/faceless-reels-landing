import { faq } from '@/content/content';

/**
 * Reference section 7 ("Questions. Short answers"), measured at 1440px:
 *   heading      52px/54.6 semibold, plain first half + accent italic tail
 *   first rule   y=192 from the section top, rows pitch exactly 77.5px
 *   rule colour  #e7e7e5 on #fafaf7  ->  our --hair on --paper
 *   question     18.5px serif, regular weight, vertically centred in the row
 *   "+" glyph    accent, flush with the right edge of the 1216px shell
 *
 * Native <details>/<summary>, so the accordion works with JS disabled and
 * this stays a server component. `.faq-item` / `.faq-sign` (globals.css)
 * hide the default marker and rotate the "+" 45deg into an "x" when open.
 */
export function Faq() {
  return (
    <section id="faq" className="bg-paper pt-[72px] pb-[88px] md:pt-[88px] md:pb-[116px]">
      <div className="shell">
        <h2 className="h2">
          {faq.headingLead.trim()} <span className="accented">{faq.headingAccent}</span>
        </h2>

        {/* Top rule comes from the first row; the wrapper closes the stack. */}
        <div className="mt-[36px] border-b border-hair md:mt-[50px]">
          {faq.items.map((item, i) => (
            <details
              key={item.q}
              // The reference loads with the first question already expanded.
              open={i === 0}
              className="faq-item border-t border-hair"
            >
              <summary className="flex items-center justify-between gap-6 py-[22px] md:py-[26px]">
                <span className="text-[16.5px] leading-[24px] font-normal text-ink md:text-[18.5px] md:leading-[24.5px]">
                  {item.q}
                </span>

                {/* The reference glyph is tiny — an 8.5px typographic "+". */}
                <span
                  aria-hidden="true"
                  className="faq-sign grid size-[22px] shrink-0 place-items-center text-accent"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M5 1.25v7.5M1.25 5h7.5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>

              <p className="max-w-[880px] pr-8 pb-[26px] text-[15px] leading-[1.6] text-ink-soft md:text-[15.5px]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
