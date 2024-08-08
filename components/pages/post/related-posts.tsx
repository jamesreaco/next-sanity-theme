import { Post } from '@/types'
import Container from '../../global/container'
import BlogCard from '../../shared/blog-card'
import Button from '../../shared/button'

export default function RelatedPosts({ posts }: {
  posts: Post[]
}) {
  return (
    <section className='mt-6 md:mt-0 mb-4 py-10 md:py-20 border-t md-border-t-none border-b bg-white'>
      <Container>
        <h2 className='pb-6 text-xl md:text-2xl font-light uppercase tracking-widest border-b border-b-[#efeff1] border-[#000]'>
          You May Also Like
        </h2>
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-12 mt-14 mb-10 md:mb-16'>
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
