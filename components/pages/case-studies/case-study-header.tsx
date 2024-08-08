import { CaseStudy } from '@/types/case-study'
import Tag from '@/components/shared/tag'
import Button from '@/components/shared/button'
import Container from '@/components/global/container'

export default function CaseStudyHeader({ caseStudy }: {
  caseStudy: CaseStudy
}) {

  const { title, shortDescription: description, url } = caseStudy

  return (
    <header className='mt-20 mb-20 -ml-1'>
      <Container>
        <div className='flex flex-col md:flex-row items-start md:items-end justify-between w-full'>
          <div className='flex-col items-start'>
            <Tag text="Case Study" />
            <h1 className='mt-8 text-4xl md:text-7xl font-light'>
              {title}
            </h1>
            <p className='md:max-w-md mt-6 leading-7'>
              {description}
            </p>
          </div>
          <Button
            href={`${url}`}
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