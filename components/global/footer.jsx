import Logo from '@/components/global/logo'

export default function Footer({ logoText }) {
  return (
    <footer className='h-[20rem] bg-white border-t'>
      <div className='max-w-7xl py-32 px-16 mx-auto my-0'>
        <Logo text={logoText} />
      </div>
    </footer>
  )
}