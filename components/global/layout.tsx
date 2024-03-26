"use client"
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
