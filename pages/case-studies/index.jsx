import { getAllCaseStudies } from '@/sanity/utils'
import Image from 'next/image'

//components
import Layout from '@/components/global/layout'
import Page from '@/components/global/page'
import Button from '@/components/shared/button'
import CaseStudyCard from '@/components/shared/case-study-card'

export default function CaseStudiesPage({ caseStudies }) {
  return (
    <Layout>
      <Page heading="Case Studies">
        <div className='grid grid-cols-2 gap-4 mt-16 mb-16'>
          {caseStudies.map(caseStudy => (
            <CaseStudyCard caseStudy={caseStudy} />
          ))}
        </div>
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
