import type { ReelMedia } from '@/content/content';
import { asset } from '@/lib/asset';

/**
 * The video surface. This is the single swap point for real media: pass
 * `{ kind: 'image', src }` or `{ kind: 'video', src, poster }` from
 * content.ts and nothing around it changes.
 *
 * Defaults to 16:9. Pass `ratio` (e.g. "9 / 16") or an `aspect-*` class in
 * `className` — when an aspect class is present the inline ratio is skipped
 * so the class wins.
 */
export function ReelSurface({
  media,
  className = '',
  ratio = '16 / 9',
  scrim = true,
  children,
}: {
  media: ReelMedia;
  className?: string;
  ratio?: string;
  scrim?: boolean;
  children?: React.ReactNode;
}) {
  const style: React.CSSProperties = {};
  if (!/\baspect-/.test(className)) style.aspectRatio = ratio;
  if (media.kind === 'gradient') style.background = media.gradient;

  return (
    <div
      className={`relative isolate overflow-hidden rounded-[10px] bg-dark-2 ${className}`}
      style={style}
    >
      {media.kind === 'image' ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(media.src)}
          alt={media.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      {media.kind === 'video' ? (
        <video
          src={asset(media.src)}
          poster={media.poster}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      {scrim ? (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
        />
      ) : null}

      {children}
    </div>
  );
}

/**
 * Marquee row 1: a dark 16:9 video surface with an accent tag top-right
 * and the runtime bottom-right.
 */
export function ReelCard({
  tag,
  title,
  runtime,
  media,
  className = '',
}: {
  tag: string;
  title?: string;
  runtime: string;
  media: ReelMedia;
  className?: string;
}) {
  return (
    <ReelSurface
      media={media}
      className={`border border-white/[0.08] ${className}`}
    >
      {title ? (
        <p className="absolute top-3.5 left-4 z-10 max-w-[58%] text-[13px] leading-[1.25] text-white/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.75)]">
          {title}
        </p>
      ) : null}

      <span className="ui absolute top-3.5 right-4 z-10 inline-flex items-center gap-[7px] text-[10.5px] font-medium tracking-[0.18em] text-white/70 uppercase">
        <span
          aria-hidden="true"
          className="h-[5px] w-[5px] shrink-0 rounded-full bg-accent"
        />
        {tag}
      </span>

      <span className="ui absolute right-4 bottom-3 z-10 text-[12px] font-medium tabular-nums text-white/70">
        {runtime}
      </span>
    </ReelSurface>
  );
}

/**
 * Marquee row 2: thumbnail style — a big condensed all-caps headline
 * across the lower half, white with a heavy dark outline.
 */
export function ReelThumbCard({
  overlay,
  media,
  className = '',
}: {
  overlay: string;
  media: ReelMedia;
  className?: string;
}) {
  return (
    <ReelSurface
      media={media}
      scrim={false}
      ratio="2 / 1"
      className={`rounded-[6px] border border-white/20 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      />
      <p
        className="ui absolute inset-x-0 bottom-[8%] z-10 px-[3%] text-center text-[17px] leading-[0.95] font-extrabold tracking-[-0.02em] whitespace-nowrap text-white uppercase sm:text-[21px] lg:text-[26px]"
        style={{
          // Inter has no condensed cut; squeezing it reproduces the
          // reference's thumbnail lettering and keeps it on one line.
          transform: 'scaleX(0.82)',
          WebkitTextStroke: '4px rgba(0,0,0,0.9)',
          paintOrder: 'stroke fill',
          textShadow: '0 3px 0 rgba(0,0,0,0.5)',
        }}
      >
        {overlay}
      </p>
    </ReelSurface>
  );
}
