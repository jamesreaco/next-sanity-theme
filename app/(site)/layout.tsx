import '../globals.css'
import React, { ReactNode } from 'react';
import { getSettings } from '@/sanity/lib/sanity.fetch'

import { Inter } from 'next/font/google'
import Layout from '@/components/global/layout';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js, Sanity & Tailwind Theme',
  description: 'Open Source Next.js, Sanity & Tailwind starter theme built by James Rea.',
}

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