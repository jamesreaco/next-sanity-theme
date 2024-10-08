import { Post } from '@/types/documents/post'
import Container from '@/components/global/container'
import BlogCard from '@/components/shared/blog-card'
import Button from '@/components/shared/button'

export default function RelatedPosts({ posts }: {
  posts: Post[]
}) {
  return (
    <section className='mt-6 md:mt-0 mb-4 py-10 md:py-20 border-t md-border-t-none border-b bg-white'>
      <Container>
        <h2 className='pb-6 text-2xl md:text-3xl antialiased tracking-tight border-b border-b-[#efeff1] border-[#000]'>
          You May Also Like
        </h2>
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 mb-10 md:mb-16'>
          {posts.slice(0, 3).map((post) => (
            <li key={post.title} >
              <BlogCard
                post={post} 
              />
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-center'>
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
