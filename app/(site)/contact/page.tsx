// components
import Header from '@/components/shared/header'
import Container from '@/components/global/container'
import ContactForm from '@/components/pages/contact/contact-form'

export const dynamic = 'force-dynamic'

export default async function ContactPage() {
  return (
    <>
      <Header heading="Contact Me" />
      <Container>
        <ContactForm />
      </Container>
    </>
  )
}