import { getCaseStudyBySlug } from '@/sanity/utils'

// components
import CaseStudyHeader from '@/components/pages/case-studies/case-study-header'
import CaseStudyOverview from '@/components/pages/case-studies/case-study-overview'
import CaseStudyImageGallery from '@/components/pages/case-studies/case-study-image-gallery'

export const dynamic = 'force-dynamic'

export default async function CaseStudyPage({ params }) {

  const caseStudy = await getCaseStudyBySlug(params.slug)

  const { 
    title, 
    shortDescription, 
    overview, 
    image, 
    url, 
    imageGallery,
  } = caseStudy

  return (
    <>
      <CaseStudyHeader 
        title={title}
        shortDescription={shortDescription}
        url={url}
      />
      <CaseStudyOverview overview={overview} image={image} title={title} />
      <CaseStudyImageGallery images={imageGallery} />
    </>
  )
}