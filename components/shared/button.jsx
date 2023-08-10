import Image from 'next/image'
import Link from 'next/link'

export default function Button({ 
  text, 
  destination, 
  variant, 
  classNames 
}) {
  return (
    <Link 
      href={`${destination}`} 
      className={`flex items-center justify-between py-2 md:py-3 px-4 md:px-5 text-base md:text-lg tracking-widest rounded-lg cursor-pointer ${classNames}`}
      style={{ 
        backgroundColor: variant === 'dark' ? `#000` : `#f6f6f2`,
        color: variant === 'dark' ? `#fff` : `#000`,
        border: variant === 'dark' ? `1px solid #fff` : `1px solid #e3e3e3`,
      }}
    >
      {text}
      <Image 
        src="/images/link-icon.png"
        width={12}
        height={12}
        alt="Link icon"
        className='ml-8 md:ml-12'
        style={{
          filter: variant === 'dark' ? `invert(0)` : `invert(0.8)`,
        }}
      />
    </Link>
  )
}