import '../globals.css'
import { Metadata } from 'next';
import { site } from '@/constants/config';
import React, { ReactNode } from 'react';
import { getSettings } from '@/sanity/lib/sanity.fetch'
import Layout from '@/components/global/layout';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  robots: { index: true, follow: true },
  openGraph: {
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.title,
    images: [`${site.url}/images/og.png`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [`${site.url}/images/og.png`],
    creator: site.authorUsername,
  },
  authors: [
    {
      name: site.authorName,
      url: site.authorWebsite,
    },
  ],
};

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {

  const settings = await getSettings()

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Layout settings={settings}>
          {children}
        </Layout>
      </body>
    </html>
  )
}