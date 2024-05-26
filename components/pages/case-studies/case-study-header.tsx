import { CaseStudy } from '@/types'
import Tag from '@/components/shared/tag'
import Flex from '@/components/shared/ui/flex'
import Button from '@/components/shared/button'
import Header from '@/components/shared/ui/header'
import Container from '@/components/global/container'

export default function CaseStudyHeader({ caseStudy }: {
  caseStudy: CaseStudy
}) {

  const { title, shortDescription, url } = caseStudy

  return (
    <Header className='mt-20 mb-20 -ml-1'>
      <Container>
        <Flex className='flex-col md:flex-row items-start md:items-end justify-between w-full'>
          <Flex className='flex-col items-start'>
            <Tag text="Case Study" />
            <Title>
              {title}
            </Title>
            <Description>
              {shortDescription}
            </Description>
          </Flex>
          <Button
            href={`${url}`}
            variant="outline"
            size="large"
          >
            View Project
          </Button>
        </Flex>
      </Container>
    </Header>
  )
}

function Title({ children }: {
  children: React.ReactNode
}) {
  return (
    <h1 className='mt-8 text-4xl md:text-7xl font-light'>
      {children}
    </h1>
  )
}

function Description({ children }: {
  children: React.ReactNode
}) {
  return (
    <p className='md:max-w-md mt-6 leading-7'>
      {children}
    </p>
  )
}
