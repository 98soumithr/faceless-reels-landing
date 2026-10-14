import { hero } from '@/content/content';
import { ReelMarquee } from './ReelMarquee';
import { CreateDemo } from './CreateDemo';

/**
 * Light hero. A field of soft blue blobs drifts across a white ground — the
 * motion reads clearly against white. Each blob animates via a class
 * (`hero-blob-*`) so the drift keeps running, gently, even under
 * prefers-reduced-motion (see globals.css).
 */
const BLOBS = [
  {
    cls: 'hero-blob-b',
    style: {
      left: '-12%',
      top: '-18%',
      width: '900px',
      height: '720px',
      background: 'radial-gradient(closest-side, rgba(47,107,255,0.42), rgba(47,107,255,0))',
      filter: 'blur(60px)',
    },
  },
  {
    cls: 'hero-blob-a',
    style: {
      left: '2%',
      top: '34%',
      width: '620px',
      height: '560px',
      background: 'radial-gradient(closest-side, rgba(91,139,255,0.5), rgba(91,139,255,0))',
      filter: 'blur(54px)',
    },
  },
  {
    cls: 'hero-blob-c',
    style: {
      right: '-10%',
      top: '-6%',
      width: '820px',
      height: '700px',
      background: 'radial-gradient(closest-side, rgba(74,163,255,0.4), rgba(74,163,255,0))',
      filter: 'blur(64px)',
    },
  },
  {
    cls: 'hero-blob-d',
    style: {
      right: '6%',
      top: '38%',
      width: '680px',
      height: '600px',
      background: 'radial-gradient(closest-side, rgba(29,79,216,0.34), rgba(29,79,216,0))',
      filter: 'blur(60px)',
    },
  },
  {
    cls: 'hero-blob-e',
    style: {
      left: '34%',
      top: '20%',
      width: '720px',
      height: '620px',
      background: 'radial-gradient(closest-side, rgba(47,107,255,0.3), rgba(47,107,255,0))',
      filter: 'blur(70px)',
    },
  },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white pt-[96px] pb-[90px] md:pt-[104px] md:pb-[110px]"
    >
      {/* Soft white base. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-white"
      />

      {/* Wide blue waves sweeping across, plus drifting blobs — the live mesh. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="hero-wave-a absolute left-[-30%] top-[6%] h-[420px] w-[160%] will-change-transform"
          style={{
            background:
              'linear-gradient(90deg, rgba(47,107,255,0) 0%, rgba(47,107,255,0.34) 36%, rgba(91,139,255,0.42) 52%, rgba(47,107,255,0.3) 66%, rgba(47,107,255,0) 100%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="hero-wave-b absolute left-[-30%] top-[44%] h-[460px] w-[160%] will-change-transform"
          style={{
            background:
              'linear-gradient(90deg, rgba(29,79,216,0) 0%, rgba(29,79,216,0.26) 34%, rgba(74,163,255,0.4) 54%, rgba(29,79,216,0.26) 72%, rgba(29,79,216,0) 100%)',
            filter: 'blur(70px)',
          }}
        />
        {BLOBS.map((blob, i) => (
          <div
            key={i}
            className={`absolute will-change-transform ${blob.cls}`}
            style={blob.style}
          />
        ))}
      </div>

      {/* Gentle white veil so the headline stays crisp over the blobs. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(1100px 620px at 50% 38%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.3) 42%, rgba(255,255,255,0) 72%)',
        }}
      />

      <div className="anim-hero shell relative">
        {/* Compact text on top, the bigger animation right below — the whole
            thing sits in one viewport. */}
        <div className="text-center">
          <h1 className="mx-auto max-w-[920px] text-[26px] leading-[1.14] font-bold tracking-[-0.015em] text-ink sm:text-[32px] lg:text-[38px]">
            {hero.topHeadlineLead}{' '}
            <span className="text-accent">{hero.topHeadlineAccent}</span>
          </h1>

          <p className="mx-auto mt-3.5 max-w-[560px] text-[14.5px] leading-[1.5] text-ink-soft md:text-[15.5px]">
            {hero.topSubhead}
          </p>
        </div>

        <div className="mt-10 md:mt-11">
          <CreateDemo />
        </div>

        <p className="label mt-[56px] flex items-center justify-center gap-2.5 text-ink-faint">
          <span className="live-dot" aria-hidden="true" />
          {hero.eyebrow}
        </p>
      </div>

      <ReelMarquee className="relative mt-6" />
    </section>
  );
}
