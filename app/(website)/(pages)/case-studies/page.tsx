import { Metadata } from 'next'
import Header from '@/components/shared/header'
import CaseStudyArchive from '@/components/pages/case-studies/case-study-archive'
import { fetchAllCaseStudies, fetchCaseStudyPage } from '@/sanity/lib/fetches'

export async function generateMetadata(): Promise<Metadata> {

  const page = await fetchCaseStudyPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function CaseStudiesPage() {

  const pageData = await fetchCaseStudyPage()
  const caseStudiesData = await fetchAllCaseStudies()

  const [ 
    page, 
    caseStudies, 
  ] = await Promise.all([pageData, caseStudiesData])

  return (
    <>
      <Header heading={page.heading} />
      <CaseStudyArchive caseStudies={caseStudies} />
    </>
  )
}
