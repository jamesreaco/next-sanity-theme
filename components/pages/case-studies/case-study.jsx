import CaseStudyHeader from './case-study-header'
import CaseStudyOverview from './case-study-overview'
import CaseStudyImageGallery from './case-study-image-gallery'

export default function CaseStudy({ caseStudy }) {
  return (
    <>
      <CaseStudyHeader caseStudy={caseStudy} />
      <CaseStudyOverview caseStudy={caseStudy} />
      <CaseStudyImageGallery caseStudy={caseStudy} />
    </>
  )
}
