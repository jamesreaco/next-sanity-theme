import { getPostBySlug } from '@/sanity/utils'

// components
import Layout from '@/components/global/layout'
import PostHeader from '@/components/pages/blog/post-header';
import PostAuthor from '@/components/pages/blog/post-author';
import Block from '@/components/post-builder/block';

export default function PostPage({ post }) {

  const { 
    image, 
    category, 
    readTime, 
    title,
    author,
    metaTitle,
    metaDescription,
    metaKeywords,
    postBuilder
  } = post

  return (
    <Layout 
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      metaKeywords={metaKeywords}
    >
      <PostHeader 
        image={image}
        category={category}
        readTime={readTime}
        title={title}
      />
      
      {postBuilder ?
        <>
          {postBuilder?.map(block => (
            <Block key={block._key} block={block} />
          ))} 
        </>
      :
        <>
          <p className='mt-4 mb-12 p-10 rounded-lg bg-white'>
            Nothing to see here. Start adding some blocks in your Sanity Studio!
          </p>
        </>
      }

      <PostAuthor 
        name={author.name}
        description={author.description}
        image={author.image}
      />
    </Layout>
  )
}

export async function getServerSideProps(context) {

  const { slug } = context.params
  const post = await getPostBySlug(slug)

  return {
    props: {
      post: post,
    }
  }
  
}

