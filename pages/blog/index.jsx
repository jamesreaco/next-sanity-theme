import { getAllPosts, getBlogPage } from '@/sanity/utils'

// components
import Layout from '@/components/global/layout'
import Page from '@/components/global/page'
import PostArchive from '@/components/pages/blog/post-archive'

export default function BlogPage({ page, posts }) {

  const { metaTitle, metaDescription, metaKeywords } = page
 
  return (
    <Layout 
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      metaKeywords={metaKeywords}
    >
      <Page heading="Blog">
        <PostArchive posts={posts} />
      </Page>
    </Layout>
  )
}

export async function getServerSideProps() {

  const page = await getBlogPage()
  const posts = await getAllPosts()

  return {
    props: {
      page: page,
      posts: posts,
    }
  }
  
}
