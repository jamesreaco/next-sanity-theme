import PortableTextEditor from '@/components/portable-text'
import type { PortableTextBlock } from '@portabletext/types'

interface PostContentProps {
  content: PortableTextBlock
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className='w-full mx-auto pt-5 md:pt-5 xl:pb-32 xl:px-5 text-gray-700'>
      <PortableTextEditor data={content} />
    </div>
  )
}