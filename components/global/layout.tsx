"use client"
import React from 'react'
import BottomBar from './bottom-bar'
import Navbar from './navbar'
import MobileNavbar from './mobile-navbar'
import Footer from './footer'
import { SettingsPayload } from '@/types'
import { usePathname } from 'next/navigation'

interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload
}

export default function Layout(props: LayoutProps) {

  const { children, settings } = props
  const pathname = usePathname()

  if (pathname === '/studio') {
    return (
      <html lang="en">
        <body>
          <main>
            {children}
          </main>
        </body>
      </html>
    )
  }

  return (
    <>
      {settings.enableBottomBar && (
        <BottomBar settings={settings} />
      )}
      <Navbar settings={settings} />
      <MobileNavbar settings={settings} />
      <main>
        {children}
      </main>
      <Footer settings={settings} />
    </>
  )
}
