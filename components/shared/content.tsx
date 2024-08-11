import { PortableText, PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types'
import PostQuoteBlock from '../pages/blog/portable-text-blocks/post-quote-block';
import PostImageBlock from '../pages/blog/portable-text-blocks/post-image-block';

interface ContentProps {
  data: PortableTextBlock
}

const components: PortableTextComponents = {
  types: {
    postImageBlock: (data) => {
      return (
        <PostImageBlock data={data.value} />
      )
    },
    postQuoteBlock: (data) => {
      return (
        <PostQuoteBlock data={data.value} />
      )
    }
  },
}

export default function Content({ data }: ContentProps) {
  return (
    <div className='prose max-w-full prose-headings:font-medium prose-p:text-sm'>
      <PortableText 
        value={data} 
        components={components}
      />
    </div>
  )
}
