/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the page can be dropped on a Hostinger VPS or Vercel.
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
