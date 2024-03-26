"use client"
import Link from 'next/link'
import { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import Logo from '@/components/shared/logo'
import { SettingsPayload } from '@/types'
import Button from '../shared/button'

interface MobileNavbarProps {
  settings: SettingsPayload
}

export default function MobileNavbar(props: MobileNavbarProps) {

  const { settings } = props
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='sticky top-0 md:hidden my-0 py-4 px-6 md:px-12 border-b bg-[#F6F6F1] bg-opacity-90 z-50 backdrop-blur-sm'>
      <div className='flex items-center justify-between'>
        <Logo text={settings.logoText} />
        <button 
          aria-label='Navigation Menu'
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ?
            <IoClose size={30} />
            :
            <HiMenuAlt4 size={30} />
          }
        </button>
      </div>
      {showMenu && (
        <nav className='z-10 absolute top-16 bottom-0 left-0 h-[100vh] w-[100vw] pt-8 px-6 bg-[#F6F6F1] bg-opacity-[98%] backdrop-blur-sm'>
          <ul 
            onClick={() => setShowMenu(false)}
            className='flex-col items-center list-none h-[100%] w-[100%]'
          >
            {settings.navbarMenuItems.map(item => (
              <li key={item.title} className='mb-8'>
                <Link 
                  href={`${item.link}`}
                  className='text-2xl tracking-wider'
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <Button
              href={`${settings.navbarButtonLink}`} 
              variant="default"
              className='text-xl py-7 px-5'
            >
              {settings.navbarButtonText}
            </Button>
          </ul>
        </nav>
      )}
    </header>
  )
}