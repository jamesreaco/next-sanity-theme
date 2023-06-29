import { useEffect, useState } from 'react'
import { getLatestPosts } from '@/sanity/utils'

// components
import BlogCard from '@/components/shared/blog-card'
import Button from '@/components/shared/button'

export default function HomeLatestPosts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchLatestPosts()
  }, [])

  const fetchLatestPosts = async () => {
    const latestPosts = await getLatestPosts()
    setPosts(latestPosts)
  }

  return (
    <section className='mb-28'>
      <h3 className='pb-6 text-2xl font-light uppercase tracking-widest border-b border-black'>
        Latest Posts
      </h3>
      <div className='mt-14 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16'>
        {posts.slice(0, 2).map((post) => (
          <BlogCard key={post.title} post={post}/>
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <Button 
          text="View All Posts" 
          destination="/blog" 
          variant="light"
        />
      </div>
    </section>
  )
}