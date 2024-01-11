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
          <div className='mt-[40px] pt-[40px] mb-8 md:mb-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-t-[#efeff1]'>
            {posts.map((post) => (
              <BlogCard 
                key={post._id} 
                post={post} 
              />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-start mt-[40px] pt-[40px] mb-[50px] md:mb-[80px] border-t border-t-[#efeff1]'>
            <div className='text-[20px]'>
              No Posts Found
            </div>
            <Button 
              text="Browse Categories"
              destination="/blog/category"
              variant="light"
              classNames="mt-6 py-2 md:py-2 px-4 md:px-4 border tracking-wide"
              iconClassNames='md:ml-8'
            />
          </div>
        )}
      </Container>
    </section>
  )
}
