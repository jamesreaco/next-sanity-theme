import Container from '@/components/global/container'
import CaseStudyCard from '@/components/shared/case-study-card'

export default function CaseStudyArchive({ caseStudies }) {
  return (
    <Container>
      <div className='grid md:grid-cols-2 gap-12 mt-[40px] md:mt-[60px] mb-16'>
        {caseStudies.map(caseStudy => (
          <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
        ))}
      </div>
    </Container>
  )
}
