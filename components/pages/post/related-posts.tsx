import { Post } from '@/types'
import Container from '../../global/container'
import BlogCard from '../../shared/blog-card'
import Button from '../../shared/button'
import Section from '@/components/shared/ui/section'
import Grid from '@/components/shared/ui/grid'
import Flex from '@/components/shared/ui/flex'

export default function RelatedPosts({ posts }: {
  posts: Post[]
}) {
  return (
    <Section className='mt-6 md:mt-0 mb-4 py-10 md:py-20 border-t md-border-t-none border-b bg-white'>
      <Container>
        <Heading>
          You May Also Like
        </Heading>
        <Grid className='grid-cols-1 lg:grid-cols-3 gap-12 mt-14 mb-10 md:mb-16'>
          {posts.slice(0, 3).map((post) => (
            <li key={post.title} >
              <BlogCard
                post={post} 
              />
            </li>
          ))}
        </Grid>
        <Flex className='items-center justify-center'>
          <Button
            href="/blog"
            variant="default"
            size="default"
          >
            View All Posts
          </Button>
        </Flex>
      </Container>
    </Section>
  )
}


function Heading({ children }: { 
  children: React.ReactNode 
}) {
  return (
    <h2 className='pb-6 text-xl md:text-2xl font-light uppercase tracking-widest border-b border-b-[#efeff1] border-[#000]'>
      {children}
    </h2>
  )
}