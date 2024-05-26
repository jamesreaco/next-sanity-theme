import Image from 'next/image'
import Box from '@/components/shared/ui/box'
import Flex from '@/components/shared/ui/flex'
import Button from '@/components/shared/button'
import Section from '@/components/shared/ui/section'
import Container from '@/components/global/container'

export default function HomeHero({ ...props }: {
  heading: string
  paragraph: string
  image: string
  btnText: string
  btnDestination: string
}) {

  const {
    heading,
    paragraph,
    image,
    btnText,
    btnDestination
  } = props

  return (
    <Section className='md:mt-20'>
      <Container>
        <Flex className='flex flex-col-reverse md:flex-row justify-between'>
          <Box>
            <Flex className='items-start flex-col'>
              <Heading>
                {heading}
              </Heading>
              <Paragraph>
                {paragraph}
              </Paragraph>
              <Button
                href={btnDestination}
                variant="default"
                size="default"
              >
                {btnText}
              </Button>
            </Flex>
          </Box>
          <Box>
            <Image 
              src={image}
              width={250}
              height={350}
              sizes="(max-width: 640px) 100px"
              alt='Image of Brooke'
              className='w-24 md:w-40 lg:w-48 mb-10 md:mb-0 mt-10 md:mt-20 object-contain'
            />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

function Heading({ children }: {
  children: React.ReactNode
}) {
  return (
    <h1 className='-ml-1 md:-ml-2 text-[12vw] font-light leading-none'>
      {children}
    </h1>
  )
}

function Paragraph({ children }: {
  children: React.ReactNode
}) {
  return (
    <p className='max-w-lg mt-6 md:mt-8 mb-8 md:mb-12 text-lg md:text-2xl font-light'>
      {children}
    </p>
  )
}