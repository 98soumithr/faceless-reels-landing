import { Logo } from './Logo';
import { brand, footer } from '@/content/content';

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-3">
      <div className="shell py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_repeat(3,1fr)] md:gap-8">
          <div className="max-w-[320px]">
            <Logo />
            <p className="mt-4 text-[13.5px] leading-[1.6] text-fg-soft">
              {brand.tagline}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[12.5px] font-bold uppercase tracking-[0.12em] text-muted">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-fg-soft transition-colors hover:text-blue-deep"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-muted">{footer.copyright}</p>
          <p className="text-[12.5px] text-muted">{footer.region}</p>
        </div>
      </div>
    </footer>
  );
}
