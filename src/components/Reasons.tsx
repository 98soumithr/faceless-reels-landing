import { reasons } from '@/content/content';
import { SectionHeader } from './SectionHeader';

export function Reasons() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeader eyebrow={reasons.eyebrow} heading={reasons.heading} />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.items.map((item) => (
            <li key={item.num} className="card p-6">
              <span className="step-num">{item.num}</span>
              <h3 className="mt-3 text-[18px] leading-tight">{item.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-fg-soft">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
