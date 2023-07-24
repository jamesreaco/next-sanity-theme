import Container from '@/components/global/container'
import Layout from '@/components/global/layout'
import Page from '@/components/global/page'
import ContactForm from '@/components/pages/contact/contact-form'
import { getContactPage } from '@/sanity/utils'
import React from 'react'

export default function ContactPage({ page }) {

  const { 
    metaTitle,
    metaDescription,
    metaKeywords
  } = page

  return (
    <Layout 
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      metaKeywords={metaKeywords}
    >
      <Page heading="Contact Me">
        <Container>
          <ContactForm />
        </Container>
      </Page>
    </Layout>
  )
}

export async function getServerSideProps() {

  const page = await getContactPage()
  
  return {
    props: {
      page: page,
    }
  }
}