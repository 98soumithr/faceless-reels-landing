import { publishMock } from '@/content/content';

/**
 * The dark "Reel details" panel that closes the pipeline section: a 16:9
 * preview on the left, the publish form fields on the right, a hairline and
 * a white pill button bottom-right.
 *
 * Reference geometry at 1440: 1216x500 panel, 32px padding, 525x294 preview,
 * 583px field column, 18px between fields.
 */

const media = publishMock.media;

function Help() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true" className="h-[12px] w-[12px] shrink-0 opacity-70">
      <circle cx="7" cy="7" r="5.6" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M5.6 5.4a1.45 1.45 0 0 1 2.8.5c0 1-1.4 1.15-1.4 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="7" cy="10.1" r="0.65" fill="currentColor" />
    </svg>
  );
}

function FieldHead({ label, counter }: { label: string; counter?: string }) {
  return (
    <div className="ui flex items-center justify-between gap-3 text-[12px] leading-none text-on-dark-faint">
      <span className="flex items-center gap-[6px] truncate">
        {label}
        <Help />
      </span>
      {counter ? <span className="shrink-0 tabular-nums">{counter}</span> : null}
    </div>
  );
}

export function PublishMock({ className = '' }: { className?: string }) {
  return (
    <div className={`card-dark px-5 pt-6 pb-7 sm:px-8 sm:pt-8 sm:pb-10 md:min-h-[500px] ${className}`}>
      <p className="ui text-[20px] leading-[1.3] font-medium text-on-dark">
        {publishMock.panelTitle}
      </p>

      <div className="mt-[29px] grid gap-5 md:grid-cols-[minmax(0,525fr)_minmax(0,583fr)] md:gap-[40px]">
        {/* 16:9 preview with a runtime badge. */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px] bg-dark"
          style={{ background: media.kind === 'gradient' ? media.gradient : undefined }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"
          />
          <span className="ui absolute right-[10px] bottom-[10px] rounded-[6px] bg-black/65 px-[7px] py-[4px] text-[12px] leading-none font-medium tabular-nums text-white">
            {publishMock.runtime}
          </span>
        </div>

        {/* Fields. */}
        <div className="flex min-w-0 flex-col gap-[18px]">
          <div className="field-dark px-4 pt-[10px] pb-3">
            <FieldHead label={publishMock.titleLabel} counter={publishMock.titleCounter} />
            <p className="ui mt-[12px] text-[16px] leading-[1.35] text-on-dark">
              {publishMock.title}
            </p>
          </div>

          <div className="field-dark px-4 pt-[10px] pb-3">
            <FieldHead
              label={publishMock.descriptionLabel}
              counter={publishMock.descriptionCounter}
            />
            <p className="ui mt-[12px] line-clamp-3 text-[14px] leading-[1.55] text-on-dark">
              {publishMock.description}
            </p>
          </div>

          <div className="field-dark px-4 pt-[10px] pb-[14px]">
            <FieldHead label={publishMock.tagsLabel} />
            <ul className="mt-[12px] flex flex-wrap gap-[8px]">
              {publishMock.tags.map((tag) => (
                <li
                  key={tag}
                  className="ui rounded-[6px] bg-dark-3 px-[10px] py-[6px] text-[12px] leading-none text-on-dark-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="mt-[26px] h-px w-full bg-dark-line" />

      <div className="mt-[19px] flex justify-end">
        <button type="button" className="btn btn-sm btn-on-dark px-[22px]">
          {publishMock.cta}
        </button>
      </div>
    </div>
  );
}
