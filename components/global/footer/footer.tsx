"use client"
import Logo from '@/components/shared/logo'
import { Settings } from '@/types/singletons/settings'
import FooterQuickLinks from './footer-quick-links'
import FooterSocialLinks from './footer-social-links'
import FooterLegalLinks from './footer-legal-links'
import FooterFootnote from './footer-footnote'
import FooterSubscribeForm from './footer-subscribe-form'
import Container from '../container'

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
              <FooterSubscribeForm 
                title={subscribeFormTitle} 
                placeholder={subscribeFormPlaceholder}
              />
            )}
          </div>
          <div className='pb-8 grid grid-cols-2 gap-24 border-b md:border-b-0 border-gray-100'>
            <FooterQuickLinks 
              footerQuickLinks={settings.footerQuickLinks} 
            />
            <FooterSocialLinks 
              footerSocialLinks={settings.footerSocialLinks} 
            />
          </div>
        </div>
        <div className='mt-10 md:mt-24 flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col md:flex-row'>
            <p className='font-light text-sm'>
              {settings.footerCopyright}
            </p>
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
            footerLegalLinks={settings.footerLegalLinks}
          />
        </div>
      </Container>
    </footer>
  )
}