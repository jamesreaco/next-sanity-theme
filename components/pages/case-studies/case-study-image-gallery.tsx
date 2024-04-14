import Image from 'next/image'
import { CaseStudy } from '@/types'
import Container from '@/components/global/container'

interface CaseStudyImageGalleryProps {
  caseStudy: CaseStudy
}

export default function CaseStudyImageGallery({ caseStudy }: CaseStudyImageGalleryProps) {

  const { imageGallery: images } = caseStudy

  return (
    <section className='my-16 md:my-32'>
      <Container>
        <div className='max-w-4xl mx-auto grid grid-cols-2 gap-5 md:gap-16'>
          {images.map((image) => (
            <Image 
              key={image.url}
              src={image.url}
              width={800}
              height={800}
              alt={image.alt}
              className='w-full rounded-xl'
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
