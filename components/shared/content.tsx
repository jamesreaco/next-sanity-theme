import styles from '@/styles/content.module.css'
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
  block: {
    h2: ({ value }) => {
      return (
        <h2 
          id={`${value._key}`}
          className='pt-2.5 text-3xl text-[#000]'
        >
          {value.children[0].text}
        </h2>
      )
    },
    h3: ({ value }) => {
      return (
        <h3 
          id={`${value._key}`}
          className='pt-6 text-2xl text-[#000]'
        >
          {value.children[0].text}
        </h3>
      )
    },
    h4: ({ value }) => {
      return (
        <h4 
          id={`${value._key}`}
          className='pt-6 text-xl text-[#000]'
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
