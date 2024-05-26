import Image from 'next/image'
import Tag from '@/components/shared/tag'
import Box from '@/components/shared/ui/box'
import Flex from '@/components/shared/ui/flex'
import Header from '@/components/shared/ui/header'
import PostTableOfContents from './post-table-of-contents'
import type { PortableTextBlock } from '@portabletext/types'

export default function PostHeader({ ...props }: {
  image: string
  category: string
  readTime: number
  title: string
  content: PortableTextBlock
}) {

  const { 
    image, 
    category, 
    readTime, 
    title, 
    content  
  } = props 

  return (
    <Header>
      <Image 
        src={image}
        width={2000}
        height={600}
        alt='Thumbnail Image'
        className='h-[250px] md:h-[400px] object-cover rounded-lg md:rounded-xl'
      />
      <Box className='xl:px-5 my-8'>
        <Flex className='items-center mt-12'>
          <Tag text={category} />
          <Box className='ml-3 text-sm md:text-base text-gray-500 font-light tracking-wide'>
            {readTime} Minute Read
          </Box>
        </Flex>
        <Heading>
          {title}
        </Heading>
      </Box>
      <Box className='xl:px-5'>
        <hr />
      </Box>
      <Box className='xl:hidden flex-1'>
        <PostTableOfContents content={content}/>
      </Box>
    </Header>
  )
}

function Heading({ children }: {
  children: React.ReactNode
}) {
  return (
    <h1 className='text-2xl md:text-3xl mt-4'>
      {children}
    </h1>
  )
}