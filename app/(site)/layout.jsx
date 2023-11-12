import { getSettings } from '@/sanity/lib/sanity.fetch'
import '../globals.css'
import Topbar from '@/components/global/topbar'
import Navbar from '@/components/global/navbar'
import MobileNavbar from '@/components/global/mobile-navbar'
import Footer from '@/components/global/footer'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js, Sanity & Tailwind Theme',
  description: 'Open Source Next.js, Sanity & Tailwind starter theme built by James Rea.',
}

export default async function RootLayout({ children }) {

  const settings = await getSettings()

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {settings.enableTopbar && (
          <Topbar 
            message={settings.topbarMessage} 
            enableTopbarLink={settings.enableTopbarLink}
            topbarLinkUrl={settings.topbarLinkUrl} 
            topbarLinkText={settings.topbarLinkText}
            topbarLinkColor={settings.topbarLinkColor}
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