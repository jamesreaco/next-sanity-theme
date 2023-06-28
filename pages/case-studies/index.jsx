import { getAllCaseStudies } from '@/sanity/utils'

//components
import Layout from '@/components/global/layout'
import Page from '@/components/global/page'
import CaseStudyArchive from '@/components/pages/case-studies/case-study-archive'

export default function CaseStudiesPage({ caseStudies }) {
  return (
    <Layout>
      <Page heading="Case Studies">
        <CaseStudyArchive caseStudies={caseStudies} />
      </Page>
    </Layout>
  )
}

export async function getServerSideProps() {

  const caseStudies = await getAllCaseStudies()

  return {
    props: {
      caseStudies: caseStudies,
    }
  }
  
}
