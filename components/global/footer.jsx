import Logo from '@/components/global/logo'

export default function Footer({ logoText }) {
  return (
    <footer className='h-[20rem] bg-white border-t'>
      <div className='max-w-7xl mx-auto p-12'>
        <Logo text={logoText} />
      </div>
    </footer>
  )
}