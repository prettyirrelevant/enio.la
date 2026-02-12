import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

// @ts-expect-error types are not available yet?
import { ViewTransition } from 'react'

import cn from 'clsx'
import localFont from 'next/font/local'

import Navbar from '@/components/navbar'
import './globals.css'

const sans = localFont({
  src: './_fonts/Figtree-Variable.woff2',
  preload: true,
  variable: '--sans',
})

const heading = localFont({
  src: './_fonts/Fraunces-Variable.woff2',
  preload: true,
  variable: '--heading',
})

const serif = localFont({
  src: './_fonts/Newsreader-Italic-Variable.woff2',
  preload: true,
  variable: '--serif',
})

const mono = localFont({
  src: './_fonts/GeistMono-Regular.ttf',
  preload: true,
  variable: '--mono',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Isaac Adewumi',
    default: 'Isaac Adewumi',
  },
  metadataBase: new URL('https://enio.la'),
  openGraph: {
    title: 'Isaac Adewumi',
    description: 'Software engineer in Lagos, Nigeria',
    siteName: 'Isaac Adewumi',
    url: 'https://enio.la',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@eniolawtf',
  },
}

export const viewport: Viewport = {
  maximumScale: 1,
  colorScheme: 'only light',
  themeColor: '#faf7f2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='overflow-x-hidden touch-manipulation'>
      <body
        className={cn(
          sans.variable,
          heading.variable,
          serif.variable,
          mono.variable,
          'w-full p-6 sm:p-10 md:p-14',
          'text-sm leading-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-7',
          'text-umber-500',
          'antialiased'
        )}
      >
        <div className='fixed sm:hidden h-6 sm:h-10 md:h-14 w-full top-0 left-0 z-30 pointer-events-none content-fade-out' />
        <div className='flex flex-col mobile:flex-row'>
          <Navbar />
          <main className='relative flex-1 max-w-2xl [contain:inline-size]'>
            <div className='absolute w-full h-px opacity-50 bg-umber-border right-0 mobile:right-auto mobile:left-0 mobile:w-px mobile:h-full mobile:opacity-100 mix-blend-multiply' />
            <ViewTransition name='crossfade'>
              <article className='pl-0 pt-6 mobile:pt-0 mobile:pl-6 sm:pl-10 md:pl-14'>
                {children}
              </article>
            </ViewTransition>
          </main>
        </div>
        {process.env.NEXT_PUBLIC_SELINE_TOKEN && (
          <Script
            src='https://cdn.seline.so/seline.js'
            data-token={process.env.NEXT_PUBLIC_SELINE_TOKEN}
            strategy='afterInteractive'
          />
        )}
      </body>
    </html>
  )
}
