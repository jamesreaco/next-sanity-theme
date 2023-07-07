import Image from 'next/image'
import React from 'react'

export default function PostAuthor({ 
  name,
  description,
  image
}) {
  return (
    <section className='max-w-xl mx-auto pb-10 md:pb-20'>
      <div className='flex flex-col md:flex-row md:items-center gap-4 p-8 bg-white border border-gray-200 rounded-2xl'>
        <Image
          src={image}
          width={80}
          height={80}
          alt={`Image of ${name}`}
          className='rounded-full'
        />
        <div>
          <div className='text-xl'>
            {name}
          </div>
          <p className='text-base text-gray-500'>
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}