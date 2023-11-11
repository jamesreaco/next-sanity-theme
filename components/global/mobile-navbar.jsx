"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// react icons
import { HiMenuAlt4 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

// components
import Logo from '@/components/shared/logo'

export default function MobileNavbar({ 
  logoText, 
  menuItems, 
  buttonText, 
  buttonLink 
}) {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='relative md:hidden my-0 py-8 px-6 md:px-12 border-b'>
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
        <nav className='z-10 absolute top-[6rem] bottom-0 left-0 h-[100vh] w-[100vw] pt-8 px-6 bg-[#F6F6F2] border-t'>
          <ul 
            onClick={() => setShowMenu(false)}
            className='flex-col items-center list-none h-[100%] w-[100%]'
          >
            
            {menuItems.map(item => (
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
              href={`${buttonLink}`} 
              className='flex items-center justify-between mt-10 py-3 pl-[16px] pr-[24px] tracking-widest cursor-pointer text-[20px] text-white font-light bg-black'
            >
              {buttonText}
              <Image 
                src="/images/link-icon.png"
                width={12}
                height={12}
                alt="Link icon"
                className='ml-8'
              />
            </Link>
          </ul>
        </nav>
      )}
    </header>
  )
}