import { getPostBySlug } from '@/sanity/utils'

// components
import Layout from '@/components/global/layout'
import PostHeader from '@/components/pages/blog/post-header';
import PostContent from '@/components/pages/blog/post-content';
import PostAuthor from '@/components/pages/blog/post-author';

export default function PostPage({ post }) {

  const { 
    image, 
    category, 
    readTime, 
    title, 
    content, 
    author,
    metaTitle,
    metaDescription,
    metaKeywords
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
      <PostContent content={content} />
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

