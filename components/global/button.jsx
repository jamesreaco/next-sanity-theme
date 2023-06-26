import Image from 'next/image'
import Link from 'next/link'

export default function Button({ text, destination }) {
  return (
    <Link 
      href={`${destination}`} 
      className='flex items-center justify-between py-5 px-7 text-[1.8rem] text-white tracking-widest rounded-lg cursor-pointer bg-black'
    >
      {text}
      <Image 
        src="/images/link-icon.png"
        width={14}
        height={14}
        alt="Link icon"
        className='ml-24'
      />
    </Link>
  )
}