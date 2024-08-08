import Image from 'next/image'
import { CaseStudy } from '@/types/case-study'
import Container from '@/components/global/container'

export default function CaseStudyImageGallery({ caseStudy }: {
  caseStudy: CaseStudy
}) {

  const { imageGallery: images } = caseStudy

  return (
    <section className='my-16 md:my-32'>
      <Container>
        <ul className='grid grid-cols-2 gap-5 md:gap-16 max-w-4xl mx-auto'>
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
        </ul>
      </Container>
    </section>
  )
}
