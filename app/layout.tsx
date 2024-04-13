import './globals.css'
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/default-metadata';
import React, { ReactNode } from 'react';
import { getSettings } from '@/sanity/lib/sanity.fetch'
import Layout from '@/components/global/layout';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = defaultMetadata

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