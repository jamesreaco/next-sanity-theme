import Content from '@/components/shared/content';
import type { PortableTextBlock } from '@portabletext/types'

interface PostContentProps {
  content: PortableTextBlock
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className='w-full mx-auto md:pt-[20px] xl:pb-[120px] xl:px-[20px] text-gray-700 blog-content'>
      <Content data={content} />
    </div>
  )
}
