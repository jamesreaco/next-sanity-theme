import Container from '@/components/global/container'
import { CaseStudy } from '@/types'
import Image from 'next/image'
import React from 'react'

interface CaseStudyImageGalleryProps {
  caseStudy: CaseStudy
}

export default function CaseStudyImageGallery({ caseStudy }: CaseStudyImageGalleryProps) {

  const { imageGallery: images } = caseStudy

  return (
    <section className='my-[60px] md:my-[120px]'>
      <Container>
        <div className='max-w-[900px] mx-auto grid grid-cols-2 gap-[20px] md:gap-[60px]'>
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
