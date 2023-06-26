import Button from '@/components/global/button'
import Link from 'next/link'
import Logo from '@/components/global/logo'

export default function Navbar({ 
  logoText, 
  menuItems, 
  buttonText, 
  buttonLink 
}) {
  return (
    <header className='max-w-7xl mx-auto my-0 p-16 flex items-center justify-between'>
      <Logo text={logoText} />
      <nav>
        <ul className='flex gap-16 items-center list-none'>
          {menuItems.map(item => (
            <li>
              <Link 
                href={`${item.link}`}
                className='text-xl tracking-wider'
              >
                {item.title}
              </Link>
           </li>
          ))}
          <Button text={buttonText} destination={`${buttonLink}`} />
        </ul>
      </nav>
    </header>
  )
}