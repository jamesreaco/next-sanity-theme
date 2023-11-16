import styles from '@/styles/content.module.css'
import { PortableText } from '@portabletext/react';
import PostQuoteBlock from '../pages/blog/post-builder-blocks/post-quote-block';
import PostImageBlock from '../pages/blog/post-builder-blocks/post-image-block';

export default function Content({ data }) {
  return (
    <div className={styles.content}>
      <PortableText 
        value={data} 
        components={{
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
          }
        }}
      />
    </div>
  )
}
