import Image from 'next/image'
import Tag from '@/components/shared/tag'
import PostTableOfContents from './post-table-of-contents'
import type { PortableTextBlock } from '@portabletext/types'

export default function PostHeader({ ...props }: {
  image: string
  category: string
  readTime: number
  title: string
  content: PortableTextBlock
}) {

  const { image, category, readTime, title, content } = props 

  return (
    <header>
      <Image 
        src={image}
        width={2000}
        height={600}
        alt='Thumbnail Image'
        className='h-[250px] md:h-[400px] object-cover rounded-lg md:rounded-xl'
      />
      <div className='xl:px-5 my-8'>
        <div className='flex items-center mt-12'>
          <Tag text={category} />
          <span className='ml-3 text-sm md:text-base font-light tracking-wide text-gray-500'>
            {readTime} Minute Read
          </span>
        </div>
        <h1 className='mt-4 text-2xl md:text-3xl tracking-tighter'>
          {title}
        </h1>
      </div>
      <div className='xl:px-5'>
        <hr />
      </div>
      <div className='xl:hidden flex-1'>
        <PostTableOfContents 
          content={content}
        />
      </div>
    </header>
  )
}