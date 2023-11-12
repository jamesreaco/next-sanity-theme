import { getCaseStudyBySlug } from '@/sanity/lib/sanity.fetch'

// components
import CaseStudyHeader from '@/components/pages/case-studies/case-study-header'
import CaseStudyOverview from '@/components/pages/case-studies/case-study-overview'
import CaseStudyImageGallery from '@/components/pages/case-studies/case-study-image-gallery'

export const dynamic = 'force-dynamic'

export default async function CaseStudyPage({ params }) {

  const caseStudy = await getCaseStudyBySlug(params.slug)

  return (
    <>
      <CaseStudyHeader 
        title={caseStudy.title}
        shortDescription={caseStudy.shortDescription}
        url={caseStudy.url}
      />
      <CaseStudyOverview overview={caseStudy.overview} image={caseStudy.image} title={caseStudy.title} />
      <CaseStudyImageGallery images={caseStudy.imageGallery} />
    </>
  )
}