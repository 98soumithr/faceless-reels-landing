import { hero } from '@/content/content';
import { ReelMarquee } from './ReelMarquee';
import { WaitlistForm } from './WaitlistForm';
import { FlipWord } from './FlipWord';

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
      className="relative isolate overflow-hidden bg-white pt-[150px] pb-[120px] md:pt-[290px] md:pb-[140px]"
    >
      {/* Soft white base. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-white"
      />

      {/* Drifting blue blobs — the live mesh. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
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
        <h1 className="h1 mx-auto max-w-[900px] text-center text-ink">
          {hero.headlineLine1}
          <br />
          {hero.headlineBeforeWord}{' '}
          <FlipWord
            words={hero.niches}
            intervalMs={1400}
            className="text-accent italic"
          />{' '}
          {hero.headlineAfterWord}
        </h1>

        <p className="mt-8 text-center text-[18px] leading-[1.5] text-ink-soft">
          {hero.subhead}
        </p>

        <div className="mt-11 flex justify-center">
          <WaitlistForm source="hero" tone="light" />
        </div>

        <p className="label mt-[108px] flex items-center gap-2.5 text-ink-faint">
          <span className="live-dot" aria-hidden="true" />
          {hero.eyebrow}
        </p>
      </div>

      <ReelMarquee className="relative mt-4" />
    </section>
  );
}
