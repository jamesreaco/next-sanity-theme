import React from 'react'

export default function Page({ heading, children }) {
  return (
    <>
      <header className='mt-12'>
        <h1 className='-ml-1 text-[10vw] md:text-[6vw] font-light leading-none'>
          {heading}
        </h1>
      </header>
      {children}
    </>
  )
}
