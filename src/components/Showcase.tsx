import { showcase } from '@/content/content';
import { SectionHeader } from './SectionHeader';
import { ReelSurface } from './ReelCard';

export function Showcase() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeader
          eyebrow={showcase.eyebrow}
          heading={showcase.heading}
          subtext={showcase.subtext}
        />

        <ul className="mx-auto mt-12 grid max-w-[940px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.reels.map((reel) => (
            <li key={reel.title}>
              <div className="group relative">
                <ReelSurface media={reel.media} className="shadow-card-lg">
                  {/* Centered play button */}
                  <button
                    type="button"
                    aria-label={`Play ${reel.title}`}
                    className="absolute inset-0 z-10 grid place-items-center"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white/92 shadow-lg transition-transform duration-200 group-hover:scale-105">
                      <svg width="16" height="18" viewBox="0 0 11 12" fill="none" aria-hidden="true">
                        <path
                          d="M10 5.13397c.6667.3849.6667 1.34712 0 1.73202L1.75 11.6212c-.66667.3849-1.5-.0962-1.5-.866V1.24472c0-.769804.83333-1.250954 1.5-.866007L10 5.13397Z"
                          fill="var(--blue)"
                        />
                      </svg>
                    </span>
                  </button>
                </ReelSurface>
              </div>

              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="text-[16px] leading-snug">{reel.title}</h3>
                <span className="shrink-0 text-[12.5px] font-semibold tabular-nums text-muted">
                  {reel.runtime}
                </span>
              </div>
              <p className="mt-1 text-[13px] font-medium text-blue-deep">{reel.tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
