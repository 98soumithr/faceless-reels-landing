import type { ReelMedia } from '@/content/content';

/**
 * The 9:16 video surface. This is the single swap point for real media:
 * pass `{ kind: 'image', src }` or `{ kind: 'video', src, poster }` from
 * content.ts and the layout around it does not change. See README.md.
 */
export function ReelSurface({
  media,
  className = '',
  children,
}: {
  media: ReelMedia;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative isolate aspect-[9/16] overflow-hidden rounded-[16px] bg-screen ${className}`}
      style={media.kind === 'gradient' ? { background: media.gradient } : undefined}
    >
      {media.kind === 'image' ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media.src}
          alt={media.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      {media.kind === 'video' ? (
        <video
          src={media.src}
          poster={media.poster}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      {/* Readability scrim under the bottom text. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
      />
      {children}
    </div>
  );
}

export function ReelCard({
  tag,
  title,
  runtime,
  media,
  className = '',
}: {
  tag: string;
  title: string;
  runtime: string;
  media: ReelMedia;
  className?: string;
}) {
  return (
    <ReelSurface media={media} className={className}>
      <span className="absolute left-2.5 top-2.5 z-10 rounded-pill bg-white/15 px-2.5 py-1 text-[10.5px] font-semibold text-white backdrop-blur-sm">
        {tag}
      </span>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-2 p-3">
        <p className="font-display text-[13px] font-bold leading-[1.25] text-white [text-wrap:balance]">
          {title}
        </p>
        <span className="shrink-0 pb-px text-[11px] font-semibold tabular-nums text-white/75">
          {runtime}
        </span>
      </div>
    </ReelSurface>
  );
}
