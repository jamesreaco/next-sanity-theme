import Container from '@/components/global/container'
import Image from 'next/image'
import React from 'react'

export default function CaseStudyImageGallery({ caseStudy }) {

  const { imageGallery: images } = caseStudy

  return (
    <Container>
      <section className='my-[60px] grid grid-cols-2 gap-[20px] md:gap-[60px]'>
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
      </section>
    </Container>
  )
}
