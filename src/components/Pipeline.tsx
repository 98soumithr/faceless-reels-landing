import { pipeline } from '@/content/content';
import { StepArtifact } from './StepArtifact';
import { PublishMock } from './PublishMock';

/**
 * "How it works" — a left-aligned heading, a full-width prompt bar, then a
 * vertical timeline of six rows (not a card grid) separated by hairlines,
 * with a rule running down the left gutter and an accent dot on it.
 *
 * Reference geometry at 1440: container rules 1280 apart, content 1216 wide,
 * prompt bar 1216x119, rows ~235 tall, artifact cards 630x142, dark publish
 * panel 1216x500.
 */
export function Pipeline() {
  return (
    <section id="how" className="relative bg-paper pt-[80px] pb-[96px] md:pt-[104px] md:pb-[128px]">
      {/* Faint vertical hairlines at the container edges, full section height. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="shell relative h-full">
          <span className="absolute inset-y-0 left-0 w-px bg-hair" />
          <span className="absolute inset-y-0 right-0 w-px bg-hair" />
        </div>
      </div>

      <div className="shell relative">
        <h2 className="h2">{pipeline.heading}</h2>

        {/* ------------------------------------------------- prompt bar */}
        <div className="mt-10 flex flex-col rounded-[10px] border border-hair bg-card px-5 pt-5 pb-7 sm:px-6 sm:pb-8 md:min-h-[119px]">
          <div className="flex items-center justify-between gap-4">
            <span className="label">{pipeline.promptLabelLeft}</span>
            <span className="label text-accent">{pipeline.promptLabelRight}</span>
          </div>

          <p className="mt-[26px] flex items-start gap-[10px]">
            <span aria-hidden="true" className="font-mono text-[16px] leading-[1.35] text-accent">
              ›
            </span>
            <span className="min-w-0 font-mono text-[15px] leading-[1.35] break-words text-ink sm:text-[16px]">
              {pipeline.promptValue}
            </span>
          </p>
        </div>

        {/* --------------------------------------------------- timeline */}
        <ol className="relative mt-[11px] border-t border-hair">
          {/* The rule the step dots sit on. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[10px] w-px bg-hair md:left-[22px]"
          />

          {pipeline.steps.map((step) => (
            <li
              key={step.num}
              className="grid border-b border-hair py-[34px] md:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] md:items-center md:py-[46px]"
            >
              <div className="relative pl-[34px] md:pl-[66px]">
                <span className="label block">{step.num}</span>

                <div className="relative mt-[13px]">
                  <span
                    aria-hidden="true"
                    className="live-dot absolute top-1/2 -left-[24px] -translate-x-1/2 -translate-y-1/2 md:-left-[44px]"
                  />
                  <h3 className="h3">{step.title}</h3>
                </div>

                <p className="ui mt-[10px] text-[13px] leading-[1.5] text-ink-faint">{step.does}</p>
              </div>

              <StepArtifact
                artifact={step.artifact}
                className="mt-6 ml-[34px] md:mt-0 md:ml-0"
              />
            </li>
          ))}
        </ol>

        {/* ---------------------------------------------------- publish */}
        <h3 className="mt-[46px] text-[26px] leading-[1.2] sm:text-[30px]">
          {pipeline.publishHeadingLead}
          <span className="accented">{pipeline.publishHeadingAccent}</span>
        </h3>

        <PublishMock className="mt-[27px]" />
      </div>
    </section>
  );
}
