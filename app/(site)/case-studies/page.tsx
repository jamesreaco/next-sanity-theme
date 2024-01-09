import { getAllCaseStudies } from '@/sanity/lib/sanity.fetch'

//components
import CaseStudyArchive from '@/components/pages/case-studies/case-study-archive'
import Header from '@/components/shared/header'

export const dynamic = 'force-dynamic'

export default async function CaseStudiesPage() {

  const caseStudies = await getAllCaseStudies()

  return (
    <>
      <Header heading="Case Studies" />
      <CaseStudyArchive caseStudies={caseStudies} />
    </>
  )
}
