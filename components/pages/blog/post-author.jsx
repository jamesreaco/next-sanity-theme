import Image from 'next/image'
import React from 'react'

export default function PostAuthor({ 
  name,
  description,
  image
}) {
  return (
    <section className='max-w-xl mx-auto md:my-10 px-6 md:px-0 pb-10'>
      <div className='flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white border border-gray-200'>
        <Image
          src={image}
          width={80}
          height={80}
          alt={`Image of ${name}`}
          className=''
        />
        <div>
          <div className='text-xl'>
            {name}
          </div>
          <p className='text-base text-gray-600'>
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
