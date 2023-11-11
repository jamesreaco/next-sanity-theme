// components
import Container from '@/components/global/container'
import Page from '@/components/global/page'
import ContactForm from '@/components/pages/contact/contact-form'

export const dynamic = 'force-dynamic'

export default async function ContactPage() {
  return (
    <Page heading="Contact Me">
      <Container>
        <ContactForm />
      </Container>
    </Page>
  )
}