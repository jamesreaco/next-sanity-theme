import { Metadata } from 'next'
import Container from '@/components/global/container'
import { fetchPrivacyPage } from '@/sanity/lib/fetches'
import PortableTextEditor from '@/components/portable-text'

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
    <div className='py-16'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-16 lg:gap-40'>
          <h1 className='flex-none -ml-1 text-3xl md:text-4xl leading-none tracking-tighter'>
            {page.heading}
          </h1>
          <div className='flex-1'>
            <PortableTextEditor 
              data={page.content} 
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
