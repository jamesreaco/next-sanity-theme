import { getAllCaseStudies } from '@/sanity/lib/sanity.queries'

//components
import Page from '@/components/global/page'
import CaseStudyArchive from '@/components/pages/case-studies/case-study-archive'

export const dynamic = 'force-dynamic'

export default async function CaseStudiesPage() {

  const caseStudies = await getAllCaseStudies()

  return (
    <Page heading="Case Studies">
      <CaseStudyArchive caseStudies={caseStudies} />
    </Page>
  )
}
