import Container from '@/components/global/container'
import CaseStudyCard from '@/components/shared/case-study-card'
import { CaseStudy } from '@/types'

interface CaseStudyArchiveProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudyArchive({ caseStudies }: CaseStudyArchiveProps) {
  return (
    <section className='mt-10 mb-6 md:my-16'>
      <Container className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map(caseStudy => (
          <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
        ))}
      </Container>
    </section>
  )
}
