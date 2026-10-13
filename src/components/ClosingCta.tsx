import { closing } from '@/content/content';
import { WaitlistForm } from './WaitlistForm';

export function ClosingCta() {
  return (
    <section id="join" className="section relative overflow-hidden">
      {/* Soft blue radial glow behind the section. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[min(1100px,150vw)] -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, var(--blue-soft) 0%, transparent 72%)',
        }}
      />

      <div className="shell relative text-center">
        <p className="eyebrow">{closing.eyebrow}</p>

        <h2 className="mx-auto mt-4 max-w-[680px] text-[32px] leading-[1.08] sm:text-[42px] md:text-[50px]">
          {closing.headlineLead}
          <span className="text-blue">{closing.headlineAccent}</span>
          {closing.headlineTail}
        </h2>

        <p className="mx-auto mt-5 max-w-[540px] text-[15.5px] leading-[1.6] text-fg-soft">
          {closing.subtext}
        </p>

        <WaitlistForm source="closing" className="mt-8" />

        <p className="mt-4 text-[12.5px] font-medium text-muted">{closing.formNote}</p>
      </div>
    </section>
  );
}
