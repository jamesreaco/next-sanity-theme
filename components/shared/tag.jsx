import React from 'react'

export default function Tag({ text }) {
  return (
    <div className='text-[15px] md:text-[16px] py-0.5 px-2.5 border-solid border rounded-full'>
      {text}
    </div>
  )
}
