import CaseStudyHeader from './case-study-header'
import CaseStudyOverview from './case-study-overview'
import { type CaseStudy } from '@/types/documents/case-study'
import CaseStudyImageGallery from './case-study-image-gallery'

export default function CaseStudy({ caseStudy }: {
  caseStudy: CaseStudy
}) {
  return (
    <>
      <CaseStudyHeader caseStudy={caseStudy} />
      <CaseStudyOverview caseStudy={caseStudy} />
      <CaseStudyImageGallery caseStudy={caseStudy} />
    </>
  )
}
