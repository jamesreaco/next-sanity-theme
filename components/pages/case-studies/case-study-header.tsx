import { CaseStudy } from '@/types'
import Tag from '@/components/shared/tag'
import Button from '@/components/shared/button'
import Container from '@/components/global/container'

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy
}

export default function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  return (
    <header className='mt-20 mb-20 -ml-1'>
      <Container>
        <div className='w-full flex flex-col md:flex-row items-start md:items-end justify-between'>
          <div className='flex flex-col items-start'>
            <Tag text="Case Study" />
            <h1 className='mt-8 text-4xl md:text-7xl font-light'>
              {caseStudy.title}
            </h1>
            <p className='md:max-w-md mt-6 leading-7'>
              {caseStudy.shortDescription}
            </p>
          </div>
          <Button
            href={`${caseStudy.url}`}
            variant="outline"
            size="large"
          >
            View Project
          </Button>
        </div>
      </Container>
    </header>
  )
}
