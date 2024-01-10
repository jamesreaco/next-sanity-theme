import { getAllCaseStudies, getCaseStudyPage } from '@/sanity/lib/sanity.fetch'

//components
import CaseStudyArchive from '@/components/pages/case-studies/case-study-archive'
import Header from '@/components/shared/header'

export const dynamic = 'force-dynamic'

export default async function CaseStudiesPage() {

  const page = await getCaseStudyPage()
  const caseStudies = await getAllCaseStudies()

  return (
    <>
      <Header heading={page.heading} />
      <CaseStudyArchive caseStudies={caseStudies} />
    </>
  )
}
