import Link from 'next/link'

export default function Logo({ text }) {
  return (
    <Link href="/" className='text-[2.4rem] uppercase tracking-widest'>
      {text}
    </Link>
  )
}