"use client"
import Link from 'next/link'
import { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { FiArrowUpRight } from 'react-icons/fi'
import Logo from '@/components/shared/logo'
import { SettingsPayload } from '@/types'

interface MobileNavbarProps {
  logoText: SettingsPayload['logoText'] 
  navbarButtonText: SettingsPayload['navbarButtonText']  
  navbarButtonLink: SettingsPayload['navbarButtonLink']   
  navbarMenuItems: SettingsPayload['navbarMenuItems']  
}

export default function MobileNavbar(props: MobileNavbarProps) {

  const { 
    logoText, 
    navbarButtonText, 
    navbarButtonLink, 
    navbarMenuItems 
  } = props
  
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='sticky top-0 md:hidden my-0 py-4 px-6 md:px-12 border-b bg-[#F6F6F1] bg-opacity-90 z-50 backdrop-blur-sm'>
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
        <nav className='z-10 absolute top-16 bottom-0 left-0 h-[100vh] w-[100vw] pt-8 px-6 bg-[#F6F6F1] bg-opacity-[98%] backdrop-blur-sm'>
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
            <Link 
              href={`${navbarButtonLink}`} 
              className='flex items-center justify-between mt-10 py-3 pl-4 pr-6 tracking-widest cursor-pointer text-xl text-white font-light rounded-lg bg-black'
            >
              {navbarButtonText}
              <FiArrowUpRight 
                size={24}
                className='ml-8'
              />
            </Link>
          </ul>
        </nav>
      )}
    </header>
  )
}