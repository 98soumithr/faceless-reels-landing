/** @type {import('next').NextConfig} */

// GitHub Pages serves a project site from a sub-path
// (https://<user>.github.io/<repo>/), so asset URLs need that prefix. A
// normal/local build leaves the prefix empty and serves from the root.
const repo = 'faceless-reels-landing';
const isPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  // Static export so the page can be dropped on GitHub Pages, a VPS or Vercel.
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  basePath: isPages ? `/${repo}` : '',
  assetPrefix: isPages ? `/${repo}/` : '',
};

export default nextConfig;
