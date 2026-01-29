import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import { CustomCursor } from '@/components/custom-cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Naresh Kumar K | Full Stack Developer | MERN Stack Expert',
  description: 'Full Stack Developer with 1.6+ years of experience building scalable web applications using MERN stack. Specializing in React, Node.js, MongoDB, and Express.',
  keywords: 'Full Stack Developer, MERN Stack, React, Node.js, Web Development, Portfolio',
  authors: [{ name: 'Naresh Kumar K' }],
  creator: 'Naresh Kumar K',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://knareshkumar.dev',
    title: 'Naresh Kumar K | Full Stack Developer',
    description: 'Full Stack Developer with 1.6+ years of experience building scalable MERN applications',
    siteName: 'Naresh Kumar K Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naresh Kumar K | Full Stack Developer',
    description: 'Full Stack Developer with 1.6+ years of experience',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Naresh Kumar K",
    "url": "https://knareshkumar.dev",
    "jobTitle": "Full Stack Developer",
    "email": "knareshkumar.dev@gmail.com",
    "telephone": "+91-8220007797",
    "sameAs": [
      "https://linkedin.com/in/knareshkumar-dev",
      "https://github.com/knareshkumar-dev",
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India",
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          <ScrollProgress />
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
