import { Metadata } from 'next'
import { fetchPrivacyPage } from '@/sanity/lib/sanity.fetch'
import Container from '@/components/global/container'
import Content from '@/components/shared/content'
import Header from '@/components/shared/header'

export async function generateMetadata(): Promise<Metadata> {

  const page = await fetchPrivacyPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function PrivacyPage() {

  const page = await fetchPrivacyPage()
  
  return (
    <>
      <Header heading={page.heading} />
      <Container>
        <div className='mx-auto md:pt-6 pb-10 px-6 md:px-0 text-lg text-gray-700 blog-content'>
          <Content data={page.content} />
        </div>
      </Container>
    </>
  )
}
