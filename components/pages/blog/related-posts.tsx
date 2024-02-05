import { Post } from '@/types'
import Container from '../../global/container'
import BlogCard from '../../shared/blog-card'
import Button from '../../shared/button'

interface RelatedPostsProps {
  posts: Post[]
}

export default function RelatedPosts(props: RelatedPostsProps) {

  const { posts } = props

  return (
    <section className='mt-6 md:mt-0 mb-4 py-[40px] md:py-[80px] border-t md-border-t-none border-b bg-[#fff]'>
      <Container>
        <h2 className='pb-6 text-[20px] md:text-[24px] font-light uppercase tracking-widest border-b border-b-[#efeff1] border-[#000]'>
          You May Also Like
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
