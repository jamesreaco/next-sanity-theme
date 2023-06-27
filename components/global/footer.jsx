import Logo from '@/components/shared/logo'

export default function Footer({ logoText }) {
  return (
    <footer className='h-[20rem] bg-white border-t'>
      <div className='max-w-7xl mx-auto p-12 px-6 md:px-12'>
        <Logo text={logoText} />
      </div>
    </footer>
  )
}