import Container from '@/components/global/container'
import BlogCard from '@/components/shared/blog-card'

export default function PostArchive({ posts }) {
  return (
    <section className='mt-[40px] md:mt-[60px] mb-8 md:mb-28'>
      <Container classNames="grid grid-cols-1 md:grid-cols-3 gap-12">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </Container>
    </section>
  )
}
