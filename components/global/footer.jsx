import Logo from '@/components/shared/logo'
import Link from 'next/link'

export default function Footer({ 
  logoText, 
  footerTagline,
  footerQuickLinks,
  footerSocialLinks,
  footerCopyright,
  footerLegalLinks
}) {
  return (
    <footer className='bg-white border-t'>
      <div className='max-w-7xl mx-auto p-12 pb-6 px-6 md:px-12'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-fit mr-auto pb-10 md:pb-0 border-b md:border-b-0 border-gray-100'>
            <Logo text={logoText} />
            <p className='mt-4'>
              {footerTagline}
            </p>
          </div>
          <div className='mt-10 md:mt-0 pb-6 md:pb-0 grid grid-cols-2 gap-24 border-b md:border-b-0 border-gray-100'>
            <div>
              <h5 className='mb-8 font-medium'>
                Quick Links
              </h5>
              <ul>
                {footerQuickLinks?.map((item) => (
                  <li className='mb-4'>
                    <Link href={`${item.link}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className='mb-8 font-medium'>
                Socials
              </h5>
              <ul>
                {footerSocialLinks?.map((item) => (
                  <li className='mb-4'>
                    <Link href={`${item.link}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-10 md:mt-28 flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col md:flex-row'>
            <p className='font-light text-sm'>
              {footerCopyright}
            </p>
            <span className='mt-1 md:mt-0 ml-0 md:ml-1 font-light text-sm'>
              A free and open source theme by
              <a 
                href="https://twitter.com/jamesreaco" 
                className='font-medium text-blue-800'
              >
              &nbsp;James Rea
              </a>
            </span>
          </div>
          <div className='flex items-center gap-1'>
            {footerLegalLinks?.map((item) => (
              <div className='flex items-center gap-1 group'>
                <Link 
                  href={item.link}
                  className='mt-1 md:mt-0 text-sm'
                >
                  {item.title}
                </Link>
                <span className='group-last:hidden'>
                  /
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}