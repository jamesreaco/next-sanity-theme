import React from 'react'

export default function HeaderBlock({ block }) {
  return (
    <header className='mt-12 mb-6'>
      <h1 className='-ml-1 text-[10vw] md:text-[6vw] font-light leading-none'>
        {block.heading}
      </h1>
    </header>
  )
}

