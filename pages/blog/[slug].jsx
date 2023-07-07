import { getPostBySlug } from '@/sanity/utils'

// components
import Layout from '@/components/global/layout'
import PostHeader from '@/components/pages/blog/post-header';
import PostContent from '@/components/pages/blog/post-content';

export default function PostPage({ post }) {

  const { 
    image, category, readTime, title, content
  } = post

  return (
    <Layout>
      <PostHeader 
        image={image}
        category={category}
        readTime={readTime}
        title={title}
      />
      <PostContent content={content} />
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

