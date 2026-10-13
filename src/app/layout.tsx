import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Reelfly — Turn a sentence into a history reel',
  description:
    'Faceless. Automated. Studio-grade. One line in, a finished, fact-checked history reel out — ready to post to TikTok, Reels and Shorts.',
  openGraph: {
    title: 'Reelfly — Turn a sentence into a history reel',
    description:
      'Faceless. Automated. Studio-grade. One line in, a finished, fact-checked history reel out.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080d1a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Erode is the reference's document face; served by Fontshare. */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f%5B%5D=erode&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
