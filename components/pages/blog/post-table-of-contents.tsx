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
          <li className='mt-[15px] text-[15px] font-semibold border-b border-b-[#ebebe6] pb-[15px] cursor-pointer antialiased list-none'>
            <a href={`#${value._key}`}>
              - {value.children[0].text} 
            </a>
          </li>
        )
      case 'h3':
        return (
          <li className='ml-[10px] mt-[15px] text-[15px] border-b border-b-[#efefea] pb-[15px] antialiased list-none'>
            <a href={`#${value._key}`}>
              - {value.children[0].text} 
            </a>
          </li>
        )
      case 'h4':
        return (
          <li className='ml-[20px] mt-[15px] text-[15px] border-b border-b-[#efefea] pb-[15px] antialiased list-none'>
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
    <div>
      <div className='pt-[20px] xl:pt-0 pb-[20px] flex items-center justify-between pr-[30px] gap-[10px] border-b'>
        <div className='text-[16px] font-medium'>
          Table Of Contents
        </div>
        <div>
        <IoListOutline size={20} />
        </div>
      </div>
      <PortableText 
        value={content} 
        components={components}
      />
    </div>
  )
}
