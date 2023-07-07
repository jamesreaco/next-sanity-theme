import { getAllCaseStudies, getCaseStudyPage } from '@/sanity/utils'

//components
import Layout from '@/components/global/layout'
import Page from '@/components/global/page'
import CaseStudyArchive from '@/components/pages/case-studies/case-study-archive'

export default function CaseStudiesPage({ page, caseStudies }) {

  const { metaTitle, metaDescription, metaKeywords } = page

  return (
    <Layout
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      metaKeywords={metaKeywords}
    >
      <Page heading="Case Studies">
        <CaseStudyArchive caseStudies={caseStudies} />
      </Page>
    </Layout>
  )
}

export async function getServerSideProps() {

  const page = await getCaseStudyPage()
  const caseStudies = await getAllCaseStudies()

  return {
    props: {
      page: page,
      caseStudies: caseStudies,
    }
  }
  
}
