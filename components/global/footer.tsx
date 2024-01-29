"use client"
import Link from 'next/link'
import Logo from '@/components/shared/logo'
import SubscribeForm from './subscribe-form'

type FooterLink = {
  _id: string
  link: string
  title: string
}

interface FooterProps {
  logoText: string,
  footerTagline: string,
  footerCopyright: string
  enableFootnote: boolean
  footerFootnoteText: string
  enableFootnoteLink: boolean
  footerFootnoteLinkText: string
  footerFootnoteLink: string
  footerQuickLinks: FooterLink[]
  footerSocialLinks: FooterLink[]
  footerLegalLinks: FooterLink[]
}

export default function Footer(props: FooterProps) {

  const {
    logoText,
    footerTagline,
    footerCopyright,
    enableFootnote,
    footerFootnoteText,
    enableFootnoteLink,
    footerFootnoteLinkText,
    footerFootnoteLink,
    footerQuickLinks,
    footerSocialLinks,
    footerLegalLinks
  } = props

  return (
    <footer className='bg-white border-t'>
      <div className='max-w-8xl mx-auto p-12 pb-[115px] md:pb-[60px] lg:pb-6 px-6 md:px-12'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-fit mr-auto pb-8 md:pb-0 border-b md:border-b-0 border-gray-100'>
            <Logo text={logoText} />
            <p className='mt-4'>
              {footerTagline}
            </p>
            <SubscribeForm />
          </div>
          <div className='mt-10 md:mt-0 pb-6 md:pb-0 grid grid-cols-2 gap-24 border-b md:border-b-0 border-gray-100'>
            <div>
              <h5 className='mb-6 font-medium'>
                Quick Links
              </h5>
              <ul>
                {footerQuickLinks?.map((item) => (
                  <li key={item._id} className='mb-4 hover:underline underline-offset-[8px]'>
                    <Link href={`${item.link}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className='mb-6 font-medium'>
                Socials
              </h5>
              <ul>
                {footerSocialLinks?.map((item) => (
                  <li key={item._id} className='mb-4 hover:underline underline-offset-[8px]'>
                    <Link href={`${item.link}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-10 md:mt-24 flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col md:flex-row'>
            <p className='font-light text-sm'>
              {footerCopyright}
            </p>
            {enableFootnote && (
              <span className='mt-1 md:mt-0 ml-0 md:ml-1 font-light text-sm'>
                {footerFootnoteText ?? 'A free and open source theme by'}
                &nbsp;
                {enableFootnoteLink && (
                  <a 
                    href={footerFootnoteLink ?? 'https://jamesrea.co'}
                    target='_blank'
                    rel="noopener noreferrer"
                    className='font-medium text-[#0e788a] hover:underline underline-offset-8 decoration-[1.5px]'
                  >
                    {footerFootnoteLinkText ?? 'James Rea'}
                  </a>
                )}
              </span>
            )}
          </div>
          <div className='mt-2 md:mt-0 flex items-center gap-1'>
            {footerLegalLinks?.map((link) => (
              <div key={link._id} className='flex items-center gap-1 group'>
                <Link 
                  href={link.link}
                  className='mt-1 md:mt-0 text-sm hover:underline underline-offset-[8px]'
                >
                  {link.title}
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