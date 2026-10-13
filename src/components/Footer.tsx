import { Logo } from './Logo';
import { brand, footer } from '@/content/content';

/**
 * Reference footer, measured at 1440px (origin = the top of the paper band
 * directly under the dark closing section):
 *   padding-top 56 · brand block then three link columns
 *   column origins x = 112 / 518 / 801.5 / 1085.5  ->  1.5fr + 3x 1fr, 41px gap
 *   labels  11px uppercase tracked, #9a9a9a      ->  .label / --ink-faint
 *   links   ~14px serif, #5b5b5b, 30px pitch     ->  --ink-soft
 *   hairline at y=247, copyright (sans) at y=281, band ends at y=352
 * The reference puts a social glyph bottom-right; ours carries the region.
 */
export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="shell pt-[56px] pb-[56px]">
        <div className="grid gap-x-[41px] gap-y-10 sm:grid-cols-3 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="sm:col-span-3 md:col-span-1">
            <Logo className="text-ink" />
            <p className="mt-[18px] max-w-[360px] text-[13.5px] leading-[22px] text-ink-soft">
              {brand.tagline}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="label">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="block w-fit text-[14px] leading-[22px] text-ink-soft transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-11 flex flex-col gap-2 border-t border-hair pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="ui text-[12.5px] leading-[1.5] text-ink-faint">{footer.copyright}</p>
          <p className="ui text-[12.5px] leading-[1.5] text-ink-faint">{footer.region}</p>
        </div>
      </div>
    </footer>
  );
}
