import { publishMock } from '@/content/content';
import { ReelSurface } from './ReelCard';

export function PublishMock() {
  return (
    <div className="card mx-auto mt-6 max-w-[680px] p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
        {/* 9:16 preview with runtime badge */}
        <div className="relative w-[116px] shrink-0 self-center sm:self-start">
          <ReelSurface media={publishMock.media}>
            <span className="absolute bottom-2 right-2 z-10 rounded-[6px] bg-black/55 px-1.5 py-0.5 text-[10.5px] font-semibold tabular-nums text-white backdrop-blur-sm">
              {publishMock.runtime}
            </span>
          </ReelSurface>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
              {publishMock.titleLabel}
            </span>
            <span className="text-[11.5px] font-semibold tabular-nums text-muted">
              {publishMock.counter}
            </span>
          </div>
          <p className="mt-2 rounded-[10px] border border-line bg-bg-2 px-3.5 py-2.5 text-[14.5px] font-medium leading-snug text-fg">
            {publishMock.title}
          </p>

          <span className="mt-4 block text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
            {publishMock.descriptionLabel}
          </span>
          <p className="mt-2 text-[13.5px] leading-[1.6] text-fg-soft">
            {publishMock.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {publishMock.hashtags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex justify-end">
            <button type="button" className="btn btn-primary px-6 py-2.5">
              {publishMock.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
