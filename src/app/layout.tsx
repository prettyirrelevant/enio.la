import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/navbar';
import Script from 'next/script';

const geistMono = localFont({
  src: '../assets/fonts/GeistMono-Regular.ttf',
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://enio.la'),
  title: {
    default: 'Isaac Adewumi',
    template: '%s | Isaac Adewumi',
  },
  description:
    "Building software, documenting learnings, and sharing thoughts on tech, football, and life's adventures.",
  openGraph: {
    title: 'Isaac Adewumi',
    description:
      "Building software, documenting learnings, and sharing thoughts on tech, football, and life's adventures.",
    url: 'https://enio.la',
    siteName: 'Isaac Adewumi',
    locale: 'en_US',
    type: 'website',
    images: ['https://enio.la/og/home/home'],
  },
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  twitter: {
    title: 'Isaac Adewumi',
    card: 'summary_large_image',
    creator: '@eniolawtf',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_SELINE_TOKEN && (
          <Script
            src="https://cdn.seline.so/seline.js"
            data-token={process.env.NEXT_PUBLIC_SELINE_TOKEN}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <Navbar />
          <main className="mt-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
