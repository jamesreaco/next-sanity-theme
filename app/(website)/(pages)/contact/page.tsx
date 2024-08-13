import { Metadata } from 'next'
import Header from '@/components/shared/header'
import Container from '@/components/global/container'
import ContactForm from '@/components/forms/contact-form'
import { fetchContactPage } from '@/sanity/lib/fetches'

export async function generateMetadata(): Promise<Metadata> {

  const page = await fetchContactPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function ContactPage() {

  const page = await fetchContactPage()

  return (
    <div className='py-16'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-16 lg:gap-40'>
          <h1 className='flex-none -ml-1 text-3xl md:text-4xl leading-none tracking-tighter'>
            {page.heading}
          </h1>
          <div className='flex-1'>
          <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  )
}