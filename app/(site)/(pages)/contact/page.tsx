// components
import { Metadata } from 'next'
import Header from '@/components/shared/header'
import Container from '@/components/global/container'
import ContactForm from '@/components/pages/contact/contact-form'
import { getContactPage } from '@/sanity/lib/sanity.fetch'

export async function generateMetadata(): Promise<Metadata> {

  const page = await getContactPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function ContactPage() {

  const page = await getContactPage()

  return (
    <>
      <Header 
        heading={page.heading} 
        centerText={true}
      />
      <Container>
        <ContactForm />
      </Container>
    </>
  )
}