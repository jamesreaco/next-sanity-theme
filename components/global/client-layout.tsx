"use client"
import React from 'react'
import Navbar from './navbar'
import Footer from './footer/footer'
import BottomBar from './bottom-bar'
import MobileNavbar from './mobile-navbar'
import { usePathname } from 'next/navigation'
import { Settings } from '@/types/singletons/settings'

export default function ClientLayout({ settings, children }: {
  settings: Settings,
  children: React.ReactNode
}) {

  const pathname = usePathname()
  if (pathname.includes('/studio')) return (children)

  return (
    <>
      <Navbar settings={settings} />
      <MobileNavbar settings={settings} />
      <main>
        {children}
      </main>
      <Footer settings={settings} />
      {settings.enableBottomBar && (
        <BottomBar settings={settings} />
      )}
    </>
  )
}
