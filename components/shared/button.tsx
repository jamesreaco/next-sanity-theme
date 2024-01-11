import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { FiArrowUpRight } from 'react-icons/fi'

interface ButtonProps {
  text: string
  destination: string
  variant?: string
  classNames?: string
  iconClassNames?: string
}

export default function Button(props: ButtonProps) {

  const { 
    text, 
    destination, 
    variant, 
    classNames, 
    iconClassNames 
  } = props

  return (
    <Link 
      href={`${destination}`} 
      className={twMerge(`flex items-center justify-between py-2 md:py-3 px-4 md:px-5 pr-3 md:pr-5 text-base md:text-lg tracking-widest rounded-lg transition hover:scale-[0.98] cursor-pointer group ${classNames}`)}
      style={{ 
        backgroundColor: variant === 'dark' ? `#000` : `#f6f6f2`,
        color: variant === 'dark' ? `#fff` : `#000`,
      }}
    >
      {text}
      <FiArrowUpRight 
        size={20}
        className={twMerge(`ml-8 md:ml-12 transition group-hover:rotate-45 ${iconClassNames}`)}
        style={{
          color: variant === 'dark' ? `#fff` : `#000`,
        }}
      />
    </Link>
  )
}