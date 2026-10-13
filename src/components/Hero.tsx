import { hero } from '@/content/content';
import { WaitlistForm } from './WaitlistForm';
import { ReelMarquee } from './ReelMarquee';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px] md:pt-[104px]">
      {/* Soft blue glow behind the headline. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[min(1000px,140vw)] -translate-x-1/2 rounded-[50%] opacity-70"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, var(--blue-soft) 0%, transparent 70%)',
        }}
      />

      <div className="shell relative text-center">
        <p className="eyebrow">{hero.eyebrow}</p>

        <h1 className="mx-auto mt-5 max-w-[860px] text-[38px] leading-[1.06] sm:text-[52px] md:text-[64px]">
          {hero.headlineLead}
          <span className="text-blue">{hero.headlineAccent}</span>
          {hero.headlineTail}
        </h1>

        <p className="mx-auto mt-5 max-w-[520px] text-[16.5px] font-medium leading-[1.55] text-fg-soft">
          {hero.subhead}
        </p>

        <WaitlistForm source="hero" className="mt-8" />

        <p className="mt-4 text-[12.5px] font-medium text-muted">{hero.formNote}</p>
      </div>

      <ReelMarquee className="mt-16 md:mt-20" />
    </section>
  );
}
