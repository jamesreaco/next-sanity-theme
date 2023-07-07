import Container from '@/components/global/container'
import CaseStudyCard from '@/components/shared/case-study-card'

export default function CaseStudyArchive({ caseStudies }) {
  return (
    <Container>
      <div className='grid grid-cols-2 gap-4 mt-16 mb-16'>
        {caseStudies.map(caseStudy => (
          <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
        ))}
      </div>
    </Container>
  )
}
