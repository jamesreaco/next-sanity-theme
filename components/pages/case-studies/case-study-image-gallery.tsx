import Image from 'next/image'
import { CaseStudy } from '@/types'
import Grid from '@/components/shared/ui/grid'
import Section from '@/components/shared/ui/section'
import Container from '@/components/global/container'

export default function CaseStudyImageGallery({ caseStudy }: {
  caseStudy: CaseStudy
}) {

  const { imageGallery: images } = caseStudy

  return (
    <Section className='my-16 md:my-32'>
      <Container>
        <Grid className='grid-cols-2 gap-5 md:gap-16 max-w-4xl mx-auto'>
          {images.map((image) => (
            <li key={image.url}>
              <Image 
                src={image.url}
                width={800}
                height={800}
                alt={image.alt}
                className='w-full rounded-xl'
              />
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
