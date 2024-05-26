"use client"
import { Post } from '@/types'
import Grid from '@/components/shared/ui/grid'
import Flex from '@/components/shared/ui/flex'
import Button from '@/components/shared/button'
import BlogCard from '@/components/shared/blog-card'
import Section from '@/components/shared/ui/section'
import Container from '@/components/global/container'

export default function HomeLatestPosts({ posts }: {
  posts: Post[]
}) {
  return (
    <Section className='mt-6 md:mt-0 mb-4 py-10 md:py-16 border-t md-border-t-none border-b bg-white'>
      <Container>
        <Heading>
          Latest Posts
        </Heading>
        <hr className='mt-8'/>
        <Grid className='grid-cols-1 lg:grid-cols-3 gap-12 mt-12'>
          {posts.slice(0, 3).map((post) => (
            <li key={post.title}>
              <BlogCard post={post} />
            </li>
          ))}
        </Grid>
        <Flex className='items-center justify-center mt-10 md:mt-16'>
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
    <h2 className='text-xl md:text-2xl font-light uppercase tracking-widest'>
      {children}
    </h2>
  )
}