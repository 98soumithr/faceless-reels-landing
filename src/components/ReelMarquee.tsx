import { reelRowBottom, reelRowTop } from '@/content/content';
import { ReelCard, ReelThumbCard } from './ReelCard';

/**
 * Two full-bleed auto-scrolling rows. Each set is rendered twice because
 * `.reel-row` translates the track by -50%; the second half is decorative
 * and hidden from assistive tech. Hovering a row pauses it (`.reel-wrap`),
 * and `.edge-mask` fades both ends.
 */
export function ReelMarquee({ className = '' }: { className?: string }) {
  const top = [...reelRowTop, ...reelRowTop];
  const bottom = [...reelRowBottom, ...reelRowBottom];

  return (
    <div className={className}>
      <div className="reel-wrap edge-mask overflow-hidden">
        <ul className="reel-row">
          {top.map((reel, i) => (
            <li
              key={`${reel.title}-${i}`}
              aria-hidden={i >= reelRowTop.length}
              className="w-[300px] shrink-0 sm:w-[400px] lg:w-[500px]"
            >
              <ReelCard {...reel} />
            </li>
          ))}
        </ul>
      </div>

      <div className="reel-wrap edge-mask mt-4 overflow-hidden">
        <ul className="reel-row reel-row-rev">
          {bottom.map((reel, i) => (
            <li
              key={`${reel.overlay}-${i}`}
              aria-hidden={i >= reelRowBottom.length}
              className="w-[240px] shrink-0 sm:w-[310px] lg:w-[390px]"
            >
              <ReelThumbCard {...reel} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
