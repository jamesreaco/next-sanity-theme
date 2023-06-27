import { getAllPosts } from '@/sanity/utils'

// components
import Layout from '@/components/global/layout'
import BlogCard from '@/components/shared/blog-card'
import Page from '@/components/global/page'

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <Page heading="Blog">
        <div className='mt-16 mb-28 grid grid-cols-1 md:grid-cols-2 gap-16'>
          {posts.map((post) => (
            <BlogCard post={post} />
          ))}
        </div>
      </Page>
    </Layout>
  )
}

export async function getServerSideProps() {

  const posts = await getAllPosts()

  return {
    props: {
      posts: posts,
    }
  }
  
}
