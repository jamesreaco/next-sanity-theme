import Link from 'next/link'
import { cn } from '@/utils/cn'
import Logo from '@/components/shared/logo'
import Button from '@/components/shared/button'
import { Settings } from '@/types/singletons/settings'
import AnimatedUnderline from '../shared/ui/animated-underline'

interface NavbarProps {
  settings: Settings
}

export default function Navbar({ settings }: NavbarProps) {
  
  const { logoText, navbarMenuItems, navbarButtonLink, navbarButtonText} = settings

  return (
    <header 
      className={cn(
        'sticky top-0 max-w-8xl mx-auto my-0 py-6 px-6 md:px-12 z-50',
        'hidden md:flex items-center justify-between',
        'rounded-bl-xl rounded-br-xl border-b border-b-[#efeff1]',
        'backdrop-blur-sm bg-[#F6F6F1] bg-opacity-80'
      )}
    >
      <Logo text={logoText} />
      <nav>
        <ul className='hidden md:flex gap-12 items-center list-none'>
          {navbarMenuItems.map(item => (
            <li key={item._id}>
              <Link 
                href={`${item.link}`}
                className='relative text-lg tracking-tight group'
              >
                {item.title}
                <AnimatedUnderline className='-bottom-4'/>
              </Link>
           </li>
          ))}
          <li>
            <Button
              href={navbarButtonLink}
              variant="default"
              size="default"
            >
              {navbarButtonText}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}