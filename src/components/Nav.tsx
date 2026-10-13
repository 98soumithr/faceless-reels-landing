import { Logo } from './Logo';
import { brand, nav } from '@/content/content';

/**
 * Floating pill nav. Not a full-width bar: a capsule inset 20px from the
 * top, centred, capped at the shell width, translucent dark with a 1px
 * light hairline and a backdrop blur. Fixed, so it rides the scroll.
 */
export function Nav() {
  return (
    <header className="fixed inset-x-0 top-[20px] z-50 px-6">
      <nav
        aria-label="Main"
        className="relative mx-auto flex max-w-[1216px] items-center justify-between gap-4 rounded-full border border-white/[0.18] bg-[rgba(10,15,28,0.46)] py-[9px] pr-[9px] pl-5 backdrop-blur-xl"
      >
        <a
          href="#top"
          aria-label={`${brand.name} — home`}
          className="shrink-0 text-on-dark"
        >
          <Logo />
        </a>

        {/* Truly centred against the pill, not against the flex remainder. */}
        <ul className="ui absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-[26px] md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] font-medium text-on-dark-soft transition-colors hover:text-on-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href={nav.signIn.href}
            className="btn btn-sm btn-ghost-on-dark hidden md:inline-flex"
          >
            {nav.signIn.label}
          </a>
          <a href={nav.cta.href} className="btn btn-sm btn-on-dark">
            {nav.cta.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
