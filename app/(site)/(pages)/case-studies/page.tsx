import { Metadata } from 'next'
import { fetchAllCaseStudies, fetchCaseStudyPage } from '@/sanity/lib/sanity.fetch'

//components
import CaseStudyArchive from '@/components/pages/case-studies/case-study-archive'
import Header from '@/components/shared/header'

export async function generateMetadata(): Promise<Metadata> {

  const page = await fetchCaseStudyPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function CaseStudiesPage() {

  const page = await fetchCaseStudyPage()
  const caseStudies = await fetchAllCaseStudies()

  return (
    <>
      <Header heading={page.heading} />
      <CaseStudyArchive caseStudies={caseStudies} />
    </>
  )
}
