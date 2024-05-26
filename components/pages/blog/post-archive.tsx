"use client"
import { Post } from '@/types'
import Box from '@/components/shared/ui/box'
import Flex from '@/components/shared/ui/flex'
import Grid from '@/components/shared/ui/grid'
import Button from '@/components/shared/button'
import Section from '@/components/shared/ui/section'
import BlogCard from '@/components/shared/blog-card'
import Container from '@/components/global/container'

export default function PostArchive({ posts }: {
  posts: Post[]
}) {
  return (
    <Section>
      <Container>
        {posts.length > 0 ? <Posts posts={posts} /> : <NoPosts />}
      </Container>
    </Section>
  )
}

function Posts({ posts }: { 
  posts: Post[] 
}) {
  return (
    <Grid className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 pt-10 mb-8 md:mb-28 border-t border-t-[#efeff1]'>
      {posts.map((post) => (
        <li key={post._id} >
          <BlogCard 
            key={post._id} 
            post={post} 
          />  
        </li>
      ))}
    </Grid>
  )
}

function NoPosts() {
  return (
    <Flex className='flex-col items-start mt-10 pt-10 mb-12 md:mb-20 border-t border-t-[#efeff1]'>
      <Box className='text-xl'>
        No Posts Found
      </Box>
      <Button
        href="/blog/category"
        variant="outline"
        size="default"
        className="mt-6"
      >
        Browse Categories
      </Button>
    </Flex>
  )
}
