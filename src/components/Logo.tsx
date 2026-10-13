import { brand } from '@/content/content';

/**
 * Reference mark: a 4-point sparkle glyph + the wordmark in the document
 * serif. Both the glyph and the text inherit `currentColor`, so the parent
 * decides the colour (white inside the dark nav pill, ink on paper).
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[9px] ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[19px] w-[19px] shrink-0"
      >
        <path d="M12 1c.6 5.6 5.4 10.4 11 11-5.6.6-10.4 5.4-11 11-.6-5.6-5.4-10.4-11-11C6.6 11.4 11.4 6.6 12 1Z" />
      </svg>
      <span className="text-[19px] font-semibold leading-none tracking-[-0.01em]">
        {brand.name}
      </span>
    </span>
  );
}
