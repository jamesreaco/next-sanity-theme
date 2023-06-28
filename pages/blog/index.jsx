import { getAllPosts } from '@/sanity/utils'

// components
import Layout from '@/components/global/layout'
import Page from '@/components/global/page'
import PostArchive from '@/components/pages/blog/post-archive'

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <Page heading="Blog">
        <PostArchive posts={posts} />
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
