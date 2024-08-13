import { Metadata } from 'next'
import Content from '@/components/shared/content'
import Container from '@/components/global/container'
import { fetchTermsPage } from '@/sanity/lib/fetches'

export async function generateMetadata(): Promise<Metadata> {

  const page = await fetchTermsPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function TermsPage() {

  const page = await fetchTermsPage()
  
  return (
    <div className='py-16'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-16 lg:gap-40'>
          <h1 className='flex-none -ml-1 text-3xl md:text-4xl leading-none tracking-tighter'>
            {page.heading}
          </h1>
          <div className='flex-1'>
            <Content data={page.content} />
          </div>
        </div>
      </Container>
    </div>
  )
}
