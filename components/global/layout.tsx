import React from 'react'
import BottomBar from './bottom-bar'
import Navbar from './navbar'
import MobileNavbar from './mobile-navbar'
import Footer from './footer'
import { SettingsPayload } from '@/types'

interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload
}

export default function Layout(props: LayoutProps) {

  const { children, settings } = props

  return (
    <>
      {settings.enableBottomBar && (
        <BottomBar 
          bottomBarMessage={settings.bottomBarMessage} 
          enableBottomBarLink={settings.enableBottomBarLink}
          bottomBarLinkUrl={settings.bottomBarLinkUrl} 
          bottomBarLinkText={settings.bottomBarLinkText}
          bottomBarLinkColor={settings.bottomBarLinkColor}
        />
      )}
      <Navbar
        logoText={settings.logoText}
        navbarButtonText={settings.navbarButtonText} 
        navbarButtonLink={settings.navbarButtonLink}
        navbarMenuItems={settings.navbarMenuItems}
      />
      <MobileNavbar
        logoText={settings.logoText}
        navbarButtonText={settings.navbarButtonText} 
        navbarButtonLink={settings.navbarButtonLink}
        navbarMenuItems={settings.navbarMenuItems}
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
        enableFootnoteLink={settings.enableFootnoteLink}
        footerFootnoteText={settings.footerFootnoteText}
        footerFootnoteLinkText={settings.footerFootnoteLinkText}
        footerFootnoteLink={settings.footerFootnoteLink}
      />
    </>
  )
}
