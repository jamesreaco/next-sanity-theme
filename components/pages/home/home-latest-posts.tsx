"use client"
import { Post } from '@/types'
import BlogCard from '@/components/shared/blog-card'
import Button from '@/components/shared/button'
import Container from '@/components/global/container'

interface HomeLatestPostsProps {
  posts: Post[]
}

export default function HomeLatestPosts({ posts }: HomeLatestPostsProps) {
  return (
    <section className='mt-6 md:mt-0 mb-4 py-10 md:py-10 border-t md-border-t-none border-b bg-[#fff]'>
      <Container>
        <h2 className='pb-6 text-xl md:text-2xl font-light uppercase tracking-widest border-b border-b-[#efeff1] border-[#000]'>
          Latest Posts
        </h2>
        <div className='mt-14 mb-10 md:mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.title} post={post} />
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