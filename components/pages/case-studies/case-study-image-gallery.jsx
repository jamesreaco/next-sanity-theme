import Container from '@/components/global/container'
import Image from 'next/image'
import React from 'react'

export default function CaseStudyImageGallery({ images }) {
  return (
    <Container>
      <section className='grid grid-cols-2 gap-8'>
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
