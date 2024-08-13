// components
import { Metadata } from 'next'
import Header from '@/components/shared/header'
import Container from '@/components/global/container'
import { fetchContactPage } from '@/sanity/lib/sanity.fetch'
import ContactForm from '@/components/forms/contact-form'

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