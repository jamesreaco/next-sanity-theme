import { getCaseStudyBySlug } from '@/sanity/utils'

// components
import CaseStudyCTA from '@/components/pages/case-studies/case-study-cta'
import CaseStudyHeader from '@/components/pages/case-studies/case-study-header'
import CaseStudyImageGallery from '@/components/pages/case-studies/case-study-image-gallery'
import CaseStudyOverview from '@/components/pages/case-studies/case-study-overview'

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
    caseStudyCtaHeading,
    caseStudyCtaText,
    caseStudyCtaButtonText,
    caseStudyCtaButtonDestination,
  } = caseStudy

  return (
    <>
      <CaseStudyHeader 
        title={title}
        shortDescription={shortDescription}
        image={image}
        url={url}
      />
      <CaseStudyOverview overview={overview} />
      <CaseStudyImageGallery images={imageGallery} />
      <CaseStudyCTA 
        heading={caseStudyCtaHeading}
        text={caseStudyCtaText}
        buttonText={caseStudyCtaButtonText}
        buttonDestination={caseStudyCtaButtonDestination}
      />
    </>
  )
}