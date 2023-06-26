import { useEffect, useState } from 'react'
import { getLatestPosts } from '@/sanity/utils'

// components
import BlogRow from '@/components/shared/blog-row'

export default function LatestPostsBlock({ block }) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchLatestPosts()
  }, [])

  const fetchLatestPosts = async () => {
    const latestPosts = await getLatestPosts()
    setPosts(latestPosts)
  }

  return (
    <section className='my-32' style={{ 
      marginTop: `${block.marginTop * 0.0625}rem`,
      marginBottom: `${block.marginBottom * 0.0625}rem` 
    }}>
      <h3 className='pt-12 pb-6 text-2xl font-light uppercase tracking-widest border-b border-black'>
        {block.heading}
      </h3>
      <div className='mt-20 grid grid-cols-1 gap-20'>
        {posts.slice(0, block.postLimit).map((post) => (
          <BlogRow key={post.title} post={post} />
        ))}
      </div>
    </section>
  )
}