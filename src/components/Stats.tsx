import { stats } from '@/content/content';

/**
 * Section 03 — the statistics band.
 *
 * Reference geometry (1440px design frame, measured off ref-sec-03):
 *   band          357px tall, paper ground, 26px dot grid, framed by the
 *                 same two full-height hairlines as section 02
 *   value         ~100px / 800 weight sans, ink, tracking -0.03em
 *   caption       ~15px sans, ink-soft, 20px under the value
 *   columns       three equal centred columns across the full container
 */
export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-hair bg-paper">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(10,15,28,.14) 1.1px, transparent 1.1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[5.5%] hidden w-px bg-hair lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[5.5%] hidden w-px bg-hair lg:block"
      />

      <div className="shell relative py-[64px] md:py-[110px]">
        <ul className="grid gap-12 text-center sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <li key={stat.value}>
              <p className="ui text-[clamp(44px,6.9vw,100px)] leading-[1] font-extrabold tracking-[-0.03em] whitespace-nowrap text-ink">
                {stat.value}
              </p>
              <p className="ui mx-auto mt-[20px] max-w-[280px] text-[15px] leading-[1.5] text-ink-soft">
                {stat.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
