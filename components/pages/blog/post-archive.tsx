"use client"
import Container from '@/components/global/container'
import BlogCard from '@/components/shared/blog-card'
import Button from '@/components/shared/button'
import { Post } from '@/types'

interface PostArchiveProps {
  posts: Post[]
}

export default function PostArchive({ posts }: PostArchiveProps) {
  return (
    <section>
      <Container>
        {posts.length > 0 ? (
          <div className='mt-10 pt-10 mb-8 md:mb-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-t-[#efeff1]'>
            {posts.map((post) => (
              <BlogCard 
                key={post._id} 
                post={post} 
              />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-start mt-10 pt-10 mb-12 md:mb-20 border-t border-t-[#efeff1]'>
            <div className='text-xl'>
              No Posts Found
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
        )}
      </Container>
    </section>
  )
}
