/**
 * Root Layout - Main application wrapper
 *
 * Provides:
 * - Global metadata and SEO
 * - Theme provider for dark/light mode
 * - Global styles
 * - Consistent layout structure
 *
 * All pages in the app/ directory use this layout.
 */

import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Site metadata for SEO
export const metadata: Metadata = {
  title: {
    default: 'tre wenger - Full Stack Developer',
    template: '%s | Tre Wenger',
  },
  description:
    'Portfolio of Tre Wenger - Full Stack Developer specializing in React, Next.js, and modern web technologies.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Portfolio',
  ],
  authors: [{ name: 'Tre Wenger' }],
  creator: 'Tre Wenger',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Tre Wenger Portfolio',
    title: 'Tre Wenger - Full Stack Developer',
    description:
      'Portfolio showcasing full stack development projects and skills.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tre Wenger Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tre Wenger - Full Stack Developer',
    description:
      'Portfolio showcasing full stack development projects and skills.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="scrollbar-thin">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
