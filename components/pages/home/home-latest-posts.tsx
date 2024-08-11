"use client"
import { Post } from '@/types/documents/post'
import Button from '@/components/shared/button'
import BlogCard from '@/components/shared/blog-card'
import Container from '@/components/global/container'

export default function HomeLatestPosts({ posts }: {
  posts: Post[]
}) {
  return (
    <section className='mt-6 md:mt-0 mb-4 py-10 md:py-16 border-t md-border-t-none border-b bg-white'>
      <Container>
        <h2 className='text-2xl md:text-3xl antialiased tracking-tight'>
          Latest Posts
        </h2>
        <hr className='mt-8'/>
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
          {posts.slice(0, 3).map((post) => (
            <li key={post.title}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-center mt-10 md:mt-16'>
          <Button
            href="/blog"
            variant="default"
            size="default"
          >
            View All Posts
          </Button>
        </div>
      </Container>
    </section>
  )
}