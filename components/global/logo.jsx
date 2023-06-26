import Link from 'next/link'

export default function Logo({ text }) {
  return (
    <Link href="/" className='text-2xl uppercase tracking-widest'>
      {text}
    </Link>
  )
}