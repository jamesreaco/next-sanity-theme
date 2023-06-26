import { getAllPosts } from '@/sanity/utils'

// components
import Layout from '@/components/global/layout'

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <header>
        <h1 className='-ml-1 mb-12 text-[6vw] font-light leading-none'>
          Blog
        </h1>
      </header>
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
