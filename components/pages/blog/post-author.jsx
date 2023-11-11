import Image from 'next/image'
import React from 'react'

export default function PostAuthor({ 
  name,
  description,
  image
}) {
  return (
    <section className='max-w-xl mx-auto md:my-10 px-6 md:px-0 pb-10'>
      <div className='flex items-center gap-4 p-4 bg-white border border-gray-200'>
        <Image
          src={image}
          width={80}
          height={80}
          alt={`Image of ${name}`}
          className=''
        />
        <div>
          <div className='text-[18px] md:text-[20px]'>
            {name}
          </div>
          <p className='text-[14px] md:text-[16px] text-base text-gray-600 antialiased'>
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
