import Content from '@/components/shared/content';
import type { PortableTextBlock } from '@portabletext/types'

interface PostContentProps {
  content: PortableTextBlock
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className='max-w-xl mx-auto md:pt-6 pb-10 px-6 md:px-0 text-lg text-gray-700 md:border-t md:border-b blog-content'>
      <Content data={content} />
    </div>
  )
}
