import { marqueeReels } from '@/content/content';
import { ReelCard } from './ReelCard';

export function ReelMarquee({ className = '' }: { className?: string }) {
  // The set is rendered twice so translateX(-50%) lands on the duplicate.
  const loop = [...marqueeReels, ...marqueeReels];

  return (
    <div className={`marquee marquee-mask ${className}`}>
      <ul className="marquee-track">
        {loop.map((reel, i) => (
          <li
            key={`${reel.title}-${i}`}
            aria-hidden={i >= marqueeReels.length}
            className="w-[158px] shrink-0 sm:w-[184px] md:w-[204px]"
          >
            <ReelCard {...reel} />
          </li>
        ))}
      </ul>
    </div>
  );
}
