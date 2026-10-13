import { pipeline } from '@/content/content';
import { SectionHeader } from './SectionHeader';
import { PublishMock } from './PublishMock';

export function Pipeline() {
  return (
    <section id="pipeline" className="section bg-bg-2">
      <div className="shell">
        <SectionHeader
          eyebrow={pipeline.eyebrow}
          heading={pipeline.heading}
          subtext={pipeline.subtext}
        />

        {/* Example prompt bar */}
        <div className="mx-auto mt-10 flex max-w-[680px] items-center gap-3 rounded-pill border border-line bg-card px-4 py-3 shadow-card sm:px-5">
          <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
            {pipeline.promptLabel}
          </span>
          <span
            aria-hidden="true"
            className="h-4 w-px shrink-0 bg-line-strong"
          />
          <code className="min-w-0 flex-1 truncate font-mono text-[13px] text-fg">
            {pipeline.promptValue}
          </code>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pipeline.steps.map((step) => (
            <li key={step.num} className="card flex flex-col p-6">
              <span className="step-num">{step.num}</span>
              <h3 className="mt-3 text-[18px] leading-tight">{step.title}</h3>
              <p className="mt-2.5 flex-1 text-[14.5px] leading-[1.6] text-fg-soft">
                {step.body}
              </p>
              <span className="chip mt-5 self-start">{step.chip}</span>
            </li>
          ))}
        </ol>

        <PublishMock />
      </div>
    </section>
  );
}
