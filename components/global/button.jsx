import Image from 'next/image'
import Link from 'next/link'

export default function Button({ text, destination }) {
  return (
    <Link 
      href={`${destination}`} 
      className='flex items-center justify-between py-3 px-5 text-lg text-white tracking-widest rounded-lg cursor-pointer bg-black'
    >
      {text}
      <Image 
        src="/images/link-icon.png"
        width={12}
        height={12}
        alt="Link icon"
        className='ml-12'
      />
    </Link>
  )
}