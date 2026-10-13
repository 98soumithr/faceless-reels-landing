import { stats } from '@/content/content';

export function Stats() {
  return (
    <section className="border-y border-line bg-bg-3 py-14 md:py-16">
      <div className="shell">
        <ul className="grid gap-10 text-center sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <li key={stat.value}>
              <p className="font-display text-[44px] font-extrabold leading-none tracking-[-0.04em] text-blue md:text-[52px]">
                {stat.value}
              </p>
              <p className="mx-auto mt-3 max-w-[260px] text-[14.5px] leading-[1.55] text-fg-soft">
                {stat.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
