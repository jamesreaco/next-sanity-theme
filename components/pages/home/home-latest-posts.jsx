"use client"
import BlogCard from '@/components/shared/blog-card'
import Button from '@/components/shared/button'
import Container from '@/components/global/container'

export default function HomeLatestPosts({ posts }) {
  return (
    <section className='mt-6 md:mt-0 mb-4 py-10 md:py-20 border-t md-border-t-none border-b bg-white'>
      <Container>
        <h2 className='pb-6 text-2xl font-light uppercase tracking-widest border-b border-black'>
          Latest Posts
        </h2>
        <div className='mt-14 mb-10 md:mb-16 grid grid-cols-1 md:grid-cols-3 gap-12'>
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.title} post={post}/>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <Button 
            text="View All Posts" 
            destination="/blog" 
            variant="dark"
          />
        </div>
      </Container>
    </section>
  )
}