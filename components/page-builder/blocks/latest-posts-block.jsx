import { useEffect, useState } from 'react'
import { getLatestPosts } from '@/sanity/utils'

// components
import BlogCard from '@/components/shared/blog-card'

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
        Recent Posts
      </h3>
      <div className='mt-20 grid grid-cols-1 gap-32'>
        {posts.slice(0, block.postLimit).map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  )
}