"use client"
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import Button from '../shared/button'
import { IoClose } from 'react-icons/io5'
import { HiMenuAlt4 } from 'react-icons/hi'
import Logo from '@/components/shared/logo'
import { Settings } from '@/types/settings'

interface MobileNavbarProps {
  settings: Settings
}

export default function MobileNavbar({ settings }: MobileNavbarProps) {

  const { logoText } = settings
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <header className='sticky top-0 md:hidden py-4 px-6 md:px-12 border-b z-50 backdrop-blur-sm bg-[#F6F6F1]/90'>
      <div className='flex items-center justify-between'>
        <Logo text={logoText} />
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
        <Menu 
          settings={settings} 
          setShowMenu={setShowMenu} 
        />
      )}
    </header>
  )
}

function Menu({ settings, setShowMenu }: {
  settings: Settings
  setShowMenu: (value: boolean) => void
}) {

  const { navbarMenuItems, navbarButtonLink, navbarButtonText } = settings

  return (
    <nav 
      className={cn(
        'absolute top-16 bottom-0 left-0 h-[100vh] w-[100vw] pt-8 px-6 z-10',
        'backdrop-blur-sm bg-[#F6F6F1] bg-opacity-[98%]'
      )}
    >
      <ul 
        onClick={() => setShowMenu(false)}
        className='flex-col items-center list-none h-[100%] w-[100%]'
      >
        {navbarMenuItems.map(item => (
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
          variant="default"
          href={`${navbarButtonLink}`} 
          className='text-xl py-7 px-5'
        >
          {navbarButtonText}
        </Button>
      </ul>
    </nav>
  )
}