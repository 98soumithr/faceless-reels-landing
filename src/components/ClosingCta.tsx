import { closing } from '@/content/content';
import { WaitlistForm } from './WaitlistForm';

/**
 * Reference section 8 — a 600px full-bleed DARK band (hard cut top and
 * bottom, no rounding) carrying a blurred gradient mesh plus film grain.
 * Sampled at 1440px the reference runs: near-black plum in the top-left,
 * a hot core peaking around (78%, 25%), a cool blue blob in the bottom-left
 * and near-black again in the bottom-right.
 *
 * Every warm hue is remapped onto the blue ramp — the hot core becomes the
 * accent, the cool blob a desaturated indigo. Same blob shapes, positions
 * and falloff; no warm hues anywhere.
 *
 * Centred stack, measured: heading 68px/1.06 with the accent half italic
 * on its own line (white, not accent-coloured, on this band), 18px/29
 * subtext capped at ~500px, then the CTA. Ours is pre-launch, so the
 * reference's button slot holds the waitlist form instead.
 */
const MESH = [
  // Darkening passes for the two near-black corners (first layer = topmost).
  'radial-gradient(58% 72% at 102% 102%, rgba(6,9,20,0.97) 0%, rgba(6,9,20,0) 62%)',
  'radial-gradient(34% 46% at -4% -10%, rgba(9,13,28,0.7) 0%, rgba(9,13,28,0) 76%)',
  // Secondary bloom the reference carries below and left of centre.
  'radial-gradient(30% 28% at 42% 57%, rgba(74,130,242,0.45) 0%, rgba(48,94,198,0.2) 54%, rgba(26,52,124,0) 82%)',
  // Hot core (the reference's red) -> accent blue.
  'radial-gradient(84% 92% at 72% 21%, rgba(44,94,206,0.95) 0%, rgba(40,86,194,0.8) 30%, rgba(28,60,148,0.42) 56%, rgba(14,28,70,0) 84%)',
  // Cool blob sweeping across the bottom-left.
  'radial-gradient(92% 78% at 20% 110%, rgba(80,110,178,0.9) 0%, rgba(58,86,148,0.6) 46%, rgba(26,38,76,0) 84%)',
  'linear-gradient(158deg, #0f1530 0%, #0b1020 56%, #080d1a 100%)',
].join(',');

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function ClosingCta() {
  return (
    <section
      id="join"
      className="relative isolate overflow-hidden bg-dark py-[96px] md:pt-[144px] md:pb-[112px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: MESH }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundSize: '160px 160px' }}
      />

      <div className="shell relative text-center">
        <h2 className="mx-auto max-w-[820px] text-[38px] leading-[1.1] font-semibold tracking-[-0.015em] text-on-dark sm:text-[52px] md:text-[68px] md:leading-[1.06]">
          {closing.headingLead.trim()}
          <span className="accented block text-on-dark">{closing.headingAccent}</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[500px] text-[16.5px] leading-[27px] text-on-dark-soft md:mt-6 md:text-[18px] md:leading-[29px]">
          {closing.subtext}
        </p>

        <div className="mt-9 flex justify-center">
          <WaitlistForm source="closing" tone="dark" />
        </div>

        <p className="ui mt-[14px] text-[12.5px] leading-[1.5] text-on-dark-faint">
          {closing.note}
        </p>
      </div>
    </section>
  );
}
