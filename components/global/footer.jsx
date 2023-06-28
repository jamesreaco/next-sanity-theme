import Logo from '@/components/shared/logo'
import Link from 'next/link'

export default function Footer({ logoText }) {
  return (
    <footer className='bg-white border-t'>
      <div className='max-w-7xl mx-auto p-12 pb-6 px-6 md:px-12'>
        <div className='flex'>
          <div className='mr-auto'>
            <Logo text={logoText} />
            <p className='mt-4'>
              Freelance digital designer from London.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-24'>
            <div>
              <h5 className='mb-8 font-medium'>
                Quick Links
              </h5>
              <ul>
                <li className='mb-4'>
                  <Link href=''>
                    Case Studies
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link href=''>
                    About
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link href=''>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className='mb-8 font-medium'>
                Socials
              </h5>
              <ul>
                <li className='mb-4'>
                  <Link href=''>
                    Twitter
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link href=''>
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-28 flex justify-between'>
          <p className='font-light text-sm'>
            Brooke © 2023 - A free and open source theme by
            <span>
              <a 
                href="https://twitter.com/jamesreaco" 
                className='font-medium text-blue-800'
              >
              &nbsp;James Rea
              </a>
            </span>.
          </p>
          <div className='flex items-center gap-1'>
            <Link 
              href=""
              className='text-sm'
            >
              Privacy Policy
            </Link>
            /
            <Link 
              href=""
              className='text-sm'
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}