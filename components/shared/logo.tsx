import Link from 'next/link'

interface LogoProps {
  text: string
}

export default function Logo(props: LogoProps) {

  const { text } = props

  return (
    <Link href="/" className='text-2xl uppercase tracking-widest transition hover:scale-[0.96]'>
      {text}
    </Link>
  )
}