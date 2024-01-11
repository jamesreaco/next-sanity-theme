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
            <p className='md:w-[30rem] mt-6 leading-7'>
              {caseStudy.shortDescription}
            </p>
          </div>
          <Button 
            text="View Project"
            destination={`${caseStudy.url}`}
            variant="light"
            classNames="mt-8 border hover:border-zinc-300"
          />
        </div>
      </Container>
    </header>
  )
}
