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
  'radial-gradient(60% 74% at 104% 104%, rgba(5,8,18,0.98) 0%, rgba(5,8,18,0) 60%)',
  'radial-gradient(44% 56% at -6% -12%, rgba(7,11,24,0.85) 0%, rgba(7,11,24,0) 74%)',
  // Secondary bloom the reference carries below and left of centre.
  'radial-gradient(28% 26% at 42% 58%, rgba(70,124,236,0.4) 0%, rgba(44,88,188,0.16) 54%, rgba(24,48,116,0) 82%)',
  // Hot core (the reference's red) -> accent blue. Tighter + dimmer so the
  // dark base reads through and the band stays moody rather than flat-bright.
  'radial-gradient(66% 74% at 72% 20%, rgba(42,90,200,0.9) 0%, rgba(36,80,186,0.62) 32%, rgba(22,50,128,0.3) 58%, rgba(12,26,66,0) 84%)',
  // Cool blob sweeping across the bottom-left.
  'radial-gradient(74% 64% at 18% 112%, rgba(60,92,160,0.72) 0%, rgba(44,70,128,0.42) 48%, rgba(22,34,70,0) 84%)',
  'linear-gradient(158deg, #0c1228 0%, #090e1e 56%, #060a16 100%)',
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
