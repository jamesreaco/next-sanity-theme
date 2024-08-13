"use client"
import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { IoListOutline } from 'react-icons/io5'

interface PostTableOfContentsProps {
  content: PortableTextBlock
}

const components: PortableTextComponents = {
  block: ({ value }) => {
    switch (value.style) {
      case 'h2':
        return (
          <li className='mt-3 text-sm font-semibold border-b border-b-[#ebebe6] pb-3 cursor-pointer antialiased list-none'>
            <a href={`#${value._key}`}>
              - {value.children[0].text} 
            </a>
          </li>
        )
      case 'h3':
        return (
          <li className='ml-2.5 mt-3 text-sm border-b border-b-[#efefea] pb-3 antialiased list-none'>
            <a href={`#${value._key}`}>
              - {value.children[0].text} 
            </a>
          </li>
        )
      case 'h4':
        return (
          <li className='ml-5 mt-3 text-sm border-b border-b-[#efefea] pb-3 antialiased list-none'>
            <a href={`#${value._key}`}>
              - {value.children[0].text} 
            </a>
          </li>
        )
      default:
        return null
    }
  },
}

export default function PostTableOfContents(props: PostTableOfContentsProps) {

  const { content } = props

  return (
    <div className='hidden xl:block'>
      <div className='py-3 px-5 flex items-center justify-between gap-2.5 border-b bg-[#f0f0eb]'>
        <div className='text-sm font-medium '>
          Table Of Contents
        </div>
        <div>
        <IoListOutline size={18} />
        </div>
      </div>
      <div className='pl-4'>
        <PortableText 
          value={content} 
          components={components}
        />
      </div>
    </div>
  )
}
