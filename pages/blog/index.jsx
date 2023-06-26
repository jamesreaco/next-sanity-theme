import { getAllPosts } from '@/sanity/utils'

// components
import Layout from '@/components/global/layout'
import BlogCard from '@/components/shared/blog-card'

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <header className='mt-4'>
        <h1 className='-ml-1 text-[6vw] font-light leading-none'>
          Blog
        </h1>
      </header>
      <div className='mt-16 mb-28 grid grid-cols-2 gap-16'>
        {posts.map((post) => (
          <BlogCard post={post} />
        ))}
      </div>
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
