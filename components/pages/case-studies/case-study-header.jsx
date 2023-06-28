import Button from '@/components/shared/button'
import Tag from '@/components/shared/tag'
import Image from 'next/image'
import React from 'react'

export default function CaseStudyHeader({ title, image, url }) {
  return (
    <header className='mt-20 -ml-1 flex flex-col items-start'>
      <div className='w-full flex items-end justify-between'>
        <div className='flex flex-col items-start'>
          <Tag text="Case Study" />
          <h1 className='mt-8 text-7xl font-light'>
            {title}
          </h1>
          <p className='w-[30rem] mt-4 leading-7'>
            Lorem ipsum dolor sit amet. Eos accusamus similique est corrupti earum est voluptas voluptas ad quaerat saepe
          </p>
        </div>
        <Button 
          text="View Project"
          destination={`${url}`}
          variant="light"
        />
      </div>
      <Image 
        src={image}
        width={2000}
        height={600}
        alt={title}
        className='mt-20 rounded-lg'
      />
    </header>
  )
}
