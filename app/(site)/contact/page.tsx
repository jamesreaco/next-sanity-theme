// components
import Header from '@/components/shared/header'
import Container from '@/components/global/container'
import ContactForm from '@/components/pages/contact/contact-form'
import { getContactPage } from '@/sanity/lib/sanity.fetch'

export const dynamic = 'force-dynamic'

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