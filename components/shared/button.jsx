import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Button({ 
  text, 
  destination, 
  variant, 
  classNames,
}) {
  return (
    <Link 
      href={`${destination}`} 
      className={twMerge(`flex items-center justify-between py-2 md:py-3 px-4 md:px-5 pr-3 md:pr-5 text-base md:text-lg tracking-widest cursor-pointer group ${classNames}`)}
      style={{ 
        backgroundColor: variant === 'dark' ? `#000` : `#f6f6f2`,
        color: variant === 'dark' ? `#fff` : `#000`,
      }}
    >
      {text}
      <FiArrowUpRight 
        size={20}
        className='ml-8 md:ml-12 transition group-hover:rotate-45'
        style={{
          color: variant === 'dark' ? `#fff` : `#000`,
        }}
      />
    </Link>
  )
}