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
        <div className='flex'>
          <div className='mr-auto'>
            <Logo text={logoText} />
            <p className='mt-4'>
              {footerTagline}
            </p>
          </div>
          <div className='grid grid-cols-2 gap-24'>
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
        <div className='mt-28 flex justify-between'>
          <p className='font-light text-sm'>
            {footerCopyright}
            <span>
              <a 
                href="https://twitter.com/jamesreaco" 
                className='font-medium text-blue-800'
              >
              &nbsp;James Rea
              </a>
            </span>
          </p>
          <div className='flex items-center gap-1'>
            {footerLegalLinks?.map((item) => (
              <div className='flex items-center gap-1 group'>
                <Link 
                  href={item.link}
                  className='text-sm'
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