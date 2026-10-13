/**
 * Prefix a root-relative asset path with the app's base path.
 *
 * Next.js applies `basePath` to `_next/*` assets and to <Link>, but NOT to
 * raw `<img src="/…">` tags. On a sub-path host (GitHub Pages project site)
 * those would 404, so every hand-written asset src must go through this.
 * `NEXT_PUBLIC_BASE_PATH` is set during the Pages build and empty locally.
 */
const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${PREFIX}${path}`;
}
