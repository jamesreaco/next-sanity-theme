import React from 'react'

export default function Page({ heading, children }) {
  return (
    <>
      <header className='mt-4'>
        <h1 className='-ml-1 text-[6vw] font-light leading-none'>
          {heading}
        </h1>
      </header>
      {children}
    </>
  )
}
