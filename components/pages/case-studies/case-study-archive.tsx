import { CaseStudy } from '@/types'
import Grid from '@/components/shared/ui/grid'
import Section from '@/components/shared/ui/section'
import Container from '@/components/global/container'
import CaseStudyCard from '@/components/shared/case-study-card'

export default function CaseStudyArchive({ caseStudies }: {
  caseStudies: CaseStudy[]
}) {
  return (
    <Section className='mt-10 mb-6 md:my-16'>
      <Container>
        <Grid className='md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {caseStudies.map(caseStudy => (
            <li key={caseStudy._id}>
              <CaseStudyCard caseStudy={caseStudy} />
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
