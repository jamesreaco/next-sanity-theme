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
          <div className='mt-[40px] md:mt-[60px] mb-8 md:mb-28 grid grid-cols-1 md:grid-cols-3 gap-12'>
            {posts.map((post) => (
              <BlogCard 
                key={post._id} 
                post={post} 
              />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-start mt-[40px] md:mt-[60px] mb-[50px] md:mb-[80px]'>
            <div className='text-[20px] md:text-[24px]'>
              No Posts Found
            </div>
            <Button 
              text="Browse Categories"
              destination="/blog/category"
              variant="light"
              classNames="mt-6 border tracking-wide"
            />
          </div>
        )}
      </Container>
    </section>
  )
}
