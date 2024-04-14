import { type CaseStudy } from '@/types'
import CaseStudyHeader from './case-study-header'
import CaseStudyOverview from './case-study-overview'
import CaseStudyImageGallery from './case-study-image-gallery'

interface CaseStudyProps {
  caseStudy: CaseStudy
}

export default function CaseStudy({ caseStudy }: CaseStudyProps) {
  return (
    <>
      <CaseStudyHeader caseStudy={caseStudy} />
      <CaseStudyOverview caseStudy={caseStudy} />
      <CaseStudyImageGallery caseStudy={caseStudy} />
    </>
  )
}
