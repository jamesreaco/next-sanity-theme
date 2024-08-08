"use client"
import { Post } from '@/types/documents/post'
import Button from '@/components/shared/button'
import BlogCard from '@/components/shared/blog-card'
import Container from '@/components/global/container'

export default function PostArchive({ posts }: {
  posts: Post[]
}) {
  return (
    <section>
      <Container>
        {posts.length > 0 ? 
          <Posts posts={posts} /> 
          : 
          <NoPosts />
        }
      </Container>
    </section>
  )
}

function Posts({ posts }: { 
  posts: Post[] 
}) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 pt-10 mb-8 md:mb-28 border-t border-t-[#efeff1]'>
      {posts.map((post) => (
        <li key={post._id}>
          <BlogCard 
            key={post._id} 
            post={post} 
          />  
        </li>
      ))}
    </ul>
  )
}

function NoPosts() {
  return (
    <div className='flex-col items-start mt-10 pt-10 mb-12 md:mb-20 border-t border-t-[#efeff1]'>
      <div>
        <span className='text-xl'>
          No Posts Found
        </span>
      </div>
      <Button
        href="/blog/category"
        variant="outline"
        size="default"
        className="mt-6"
      >
        Browse Categories
      </Button>
    </div>
  )
}
