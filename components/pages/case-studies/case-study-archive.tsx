import { CaseStudy } from '@/types/case-study'
import Container from '@/components/global/container'
import CaseStudyCard from '@/components/shared/case-study-card'

export default function CaseStudyArchive({ caseStudies }: {
  caseStudies: CaseStudy[]
}) {
  return (
    <section className='mt-10 mb-6 md:my-16'>
      <Container>
        <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {caseStudies.map(caseStudy => (
            <li key={caseStudy._id}>
              <CaseStudyCard caseStudy={caseStudy} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
