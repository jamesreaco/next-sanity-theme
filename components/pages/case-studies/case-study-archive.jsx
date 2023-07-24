import Container from '@/components/global/container'
import CaseStudyCard from '@/components/shared/case-study-card'

export default function CaseStudyArchive({ caseStudies }) {
  return (
    <Container>
      <div className='grid md:grid-cols-2 gap-4 mt-14 mb-16'>
        {caseStudies.map(caseStudy => (
          <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
        ))}
      </div>
    </Container>
  )
}
