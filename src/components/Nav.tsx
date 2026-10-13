import { Logo } from './Logo';
import { nav } from '@/content/content';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="shell flex h-[66px] items-center justify-between gap-4"
      >
        <a href="#top" className="shrink-0" aria-label={`${'Faceless Reels'} — home`}>
          <Logo />
        </a>

        {/* Center links collapse away on small screens. */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14.5px] font-medium text-fg-soft transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-5">
          <a
            href={nav.signIn.href}
            className="hidden text-[14.5px] font-medium text-fg-soft transition-colors hover:text-fg sm:block"
          >
            {nav.signIn.label}
          </a>
          <a href={nav.cta.href} className="btn btn-primary px-5 py-2.5 text-[13.5px]">
            {nav.cta.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
