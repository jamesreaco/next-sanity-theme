import Layout from '@/components/global/layout'
import { getCaseStudyBySlug } from '@/sanity/utils'
import React from 'react'

export default function CaseStudyPage({ caseStudy }) {
  return (
    <Layout>
      <h1>
        {caseStudy.title}
      </h1>
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
