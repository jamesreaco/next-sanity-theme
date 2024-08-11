import Link from 'next/link'

interface LogoProps {
  text: string
}

export default function Logo(props: LogoProps) {

  const { text } = props

  return (
    <Link href="/" className='flex items-center gap-3 text-2xl uppercase font-medium antialiased tracking-tighter transition hover:scale-[0.96]'>
      <span className='text-xl text-[#237F8F]'>✦</span> {text}
    </Link>
  )
}