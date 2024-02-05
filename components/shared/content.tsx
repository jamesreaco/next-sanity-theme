import styles from '@/styles/content.module.css'
import { PortableText, PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types'
import PostQuoteBlock from '../pages/blog/post-builder-blocks/post-quote-block';
import PostImageBlock from '../pages/blog/post-builder-blocks/post-image-block';

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
  block: {
    h2: ({ value }) => {
      return (
        <h2 
          id={`${value._key}`}
          className='pt-[10px] text-[28px] text-[#000]'
        >
          {value.children[0].text}
        </h2>
      )
    },
    h3: ({ value }) => {
      return (
        <h3 
          id={`${value._key}`}
          className='pt-[24px] text-[22px] text-[#000]'
        >
          {value.children[0].text}
        </h3>
      )
    },
    h4: ({ value }) => {
      return (
        <h4 
          id={`${value._key}`}
          className='pt-[24px] text-[18px] text-[#000]'
        >
          {value.children[0].text}
        </h4>
      )
    },
  },
}

export default function Content({ data }: ContentProps) {
  return (
    <div className={styles.content}>
      <PortableText 
        value={data} 
        components={components}
      />
    </div>
  )
}
