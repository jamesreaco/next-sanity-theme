import Image from 'next/image'
import Tag from '@/components/shared/tag'
import PostTableOfContents from './post-table-of-contents'
import type { PortableTextBlock } from '@portabletext/types'

interface PostHeaderProps {
  image: string
  category: string
  readTime: number
  title: string
  content: PortableTextBlock
}

export default function PostHeader(props: PostHeaderProps) {

  const { image, category, readTime, title, content  } = props 

  return (
    <header>
      <Image 
        src={image}
        width={2000}
        height={600}
        alt='Thumbnail Image'
        className='h-[250px] md:h-[400px] object-cover rounded-lg md:rounded-xl'
      />
      <div className='xl:px-[20px] my-[30px]'>
        <div className='mt-[50px] flex items-center'>
          <Tag text={category} />
          <div className='ml-3 text-[15px] md:text-[16px] text-gray-500 font-light tracking-wide'>
            {readTime} Minute Read
          </div>
        </div>
        <h1 className='text-[26px] md:text-[32px] mt-4'>
          {title}
        </h1>
      </div>
      <div className='xl:px-[20px]'>
        <hr />
      </div>
      <div className='xl:hidden flex-1 '>
        <PostTableOfContents content={content}/>
      </div>
    </header>
  )
}