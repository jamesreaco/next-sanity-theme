import '../globals.css'
import React, { ReactNode } from 'react';
import { getSettings } from '@/sanity/lib/sanity.fetch'
import BottomBar from '@/components/global/bottom-bar'
import Navbar from '@/components/global/navbar'
import MobileNavbar from '@/components/global/mobile-navbar'
import Footer from '@/components/global/footer'

import { Inter } from 'next/font/google'
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
        {settings.enableBottomBar && (
          <BottomBar 
            message={settings.bottomBarMessage} 
            enableBottomBarLink={settings.enableBottomBarLink}
            bottomBarLinkUrl={settings.bottomBarLinkUrl} 
            bottomBarLinkText={settings.bottomBarLinkText}
            bottomBarLinkColor={settings.bottomBarLinkColor}
          />
        )}
        <Navbar 
          buttonText={settings.navbarButtonText} 
          buttonLink={settings.navbarButtonLink}
          logoText={settings.logoText}
          menuItems={settings.navbarMenuItems}
        />
        <MobileNavbar
          buttonText={settings.navbarButtonText} 
          buttonLink={settings.navbarButtonLink}
          logoText={settings.logoText}
          menuItems={settings.navbarMenuItems}
        />
        <main>
          {children}
        </main>
        <Footer 
          logoText={settings.logoText}
          footerTagline={settings.footerTagline}
          footerQuickLinks={settings.footerQuickLinks}
          footerSocialLinks={settings.footerSocialLinks}
          footerCopyright={settings.footerCopyright}
          footerLegalLinks={settings.footerLegalLinks}
          enableFootnote={settings.enableFootnote}
          footerFootnoteText={settings.footerFootnoteText}
          enableFootnoteLink={settings.enableFootnoteLink}
          footerFootnoteLink={settings.footerFootnoteLink}
        />
      </body>
    </html>
  )
}