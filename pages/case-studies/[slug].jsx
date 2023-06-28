import Layout from '@/components/global/layout'
import CaseStudyHeader from '@/components/pages/case-studies/case-study-header'
import CaseStudyOverview from '@/components/pages/case-studies/case-study-overview'
import { getCaseStudyBySlug } from '@/sanity/utils'
import React from 'react'

export default function CaseStudyPage({ caseStudy }) {

  const { 
    title, shortDescription, image, url
  } = caseStudy

  return (
    <Layout>
      <CaseStudyHeader 
        title={title}
        shortDescription={shortDescription}
        image={image}
        url={url}
      />
      <CaseStudyOverview />
    </Layout>
  )
}

export async function getServerSideProps(context) {

  const { slug } = context.params
  const caseStudy = await getCaseStudyBySlug(slug)

  return {
    props: {
      caseStudy: caseStudy,
    }
  }

}
