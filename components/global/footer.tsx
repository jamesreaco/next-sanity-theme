"use client"
import Link from "next/link"
import Container from './container'
import Logo from '@/components/shared/logo'
import SubscribeForm from '../forms/subscribe-form'
import { Settings } from '@/types/singletons/settings'
import AnimatedUnderline from "@/components/shared/animated-underline"

interface FooterProps {
  settings: Settings
}

export default function Footer({ settings }: FooterProps) {

  const { 
    logoText, 
    footerTagline, 
    enableSubscribeForm, 
    subscribeFormTitle, 
    subscribeFormPlaceholder 
  } = settings

  return (
    <footer className='pt-20 pb-5 border-t bg-white'>
      <Container>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full md:w-fit mr-auto border-b md:border-b-0 border-gray-100'>
            <Logo text={logoText} />
            <p className='mt-4 tracking-tight'>
              {footerTagline}
            </p>
            {enableSubscribeForm && (
              <SubscribeForm 
                title={subscribeFormTitle} 
                placeholder={subscribeFormPlaceholder}
              />
            )}
          </div>
          <div className='pb-8 grid grid-cols-2 gap-24 border-b md:border-b-0 border-gray-100'>
            <FooterLinks 
              heading="Quick Links"
              links={settings.footerQuickLinks} 
            />
            <FooterLinks 
              heading="Socials"
              links={settings.footerSocialLinks} 
            />
          </div>
        </div>
        <div className='mt-10 md:mt-24 flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col md:flex-row'>
            <span className='font-light text-sm'>
              {settings.footerCopyright}
            </span>
            {settings.enableFootnote && (
              <FooterFootnote 
                footerFootnoteText={settings.footerFootnoteText}
                enableFootnoteLink={settings.enableFootnoteLink}
                footerFootnoteLink={settings.footerFootnoteLink}
                footerFootnoteLinkText={settings.footerFootnoteLinkText}
              />
            )}
          </div>
          <FooterLegalLinks 
            links={settings.footerLegalLinks}
          />
        </div>
      </Container>
    </footer>
  )
}

interface FooterLinksProps {
  heading: string
  links: {
    _id: string
    title: string
    link: string
  }[]
}

function FooterLinks({ heading, links }: FooterLinksProps) {
  return (
    <div>
      <h5 className='mb-6 font-semibold antialiased tracking-tight'>
        {heading}
      </h5>
      <ul className="space-y-4">
        {links?.map((item) => (
          <li key={item._id}>
            <Link 
              href={`${item.link}`}
              className="relative tracking-tight group"
            >
              {item.title}
              <AnimatedUnderline />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface FooterLegalLinksProps {
  links: Settings['footerLegalLinks']
}

function FooterLegalLinks({ links }: FooterLegalLinksProps) {
  return (
    <div className='flex items-center gap-2.5'>
      {links?.map((link) => (
        <div 
          key={link._id} 
          className='flex items-center gap-2.5 group'
        >
          <Link 
            href={link.link}
            className='relative mt-1 md:mt-0 text-sm tracking-tight group'
          >
            {link.title}
            <AnimatedUnderline className="-bottom-1.5" />
          </Link>
          <span className='group-last:hidden'>
            /
          </span>
        </div>
      ))}
    </div>
  )
}

interface FooterFootnoteProps {
  footerFootnoteText: Settings['footerFootnoteText']
  enableFootnoteLink: Settings['enableFootnoteLink']
  footerFootnoteLink: Settings['footerFootnoteLink']
  footerFootnoteLinkText: Settings['footerFootnoteLinkText']
}

function FooterFootnote(props: FooterFootnoteProps) {

  const {
    footerFootnoteText,
    enableFootnoteLink,
    footerFootnoteLink,
    footerFootnoteLinkText
  } = props

  return (
    <span className='mt-1 md:mt-0 ml-0 md:ml-1 text-sm tracking-tight'>
      {footerFootnoteText ?? 'A free and open source theme by'}
      &nbsp;
      {enableFootnoteLink && (
        <a 
          href={footerFootnoteLink ?? 'https://jamesrea.co'}
          target='_blank'
          rel="noopener noreferrer"
          className='relative font-medium text-[#0e788a] group'
        >
          {footerFootnoteLinkText ?? 'James Rea'}
          <AnimatedUnderline className="-bottom-1.5 bg-[#0e788a]" />
        </a>
      )}
    </span>
  )
}