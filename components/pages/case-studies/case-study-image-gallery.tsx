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
    <section className='my-[60px]'>
      <Container classNames="grid grid-cols-2 gap-[20px] md:gap-[60px]">
        {images.map((image) => (
          <Image 
            key={image.url}
            src={image.url}
            width={600}
            height={600}
            alt={image.alt}
            className='w-full'
          />
        ))}
      </Container>
    </section>
  )
}
