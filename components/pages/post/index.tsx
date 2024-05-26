"use client"
import { type Post } from '@/types';
import PostContent from './post-content';
import Box from '@/components/shared/ui/box';
import Flex from '@/components/shared/ui/flex';
import Container from '@/components/global/container';
import PostTableOfContents from './post-table-of-contents';
import PostHeader from '@/components/pages/post/post-header';
import PostAuthor from '@/components/pages/post/post-author';
import RelatedPosts from '@/components/pages/post/related-posts';
import ScrollProgress from '@/components/global/scroll-progress';

export default function Post({ post }: { post: Post }) {

  const { 
    title,
    author, 
    content, 
    image,
    category,
    readTime,
    relatedPosts
  } = post

  return (
    <div className='z-[200] relative h-full bg-[#F6F6F1]'>
      <ScrollProgress />
      <Container>
        <Flex className='flex-col xl:flex-row gap-10 relative'>
          <Box className='hidden xl:block flex-1 lg:sticky top-1.5 left-0 h-screen border-l border-r'>
            <PostTableOfContents content={post.content}/>
          </Box>
          <Box className='mt-10 flex-[2.2]'>
            <PostHeader 
              image={image}
              category={category.title}
              readTime={readTime}
              title={title}
              content={post.content}
            />
            <PostContent 
              content={content} 
            />
          </Box>
          <Box className='flex-1 xl:sticky mt-10 top-10 left-0 h-screen border-l'>
            <Flex className='flex-col xl:pl-8'>
              <PostAuthor 
                name={author.name}
                description={author.description}
                image={author.image}
              />
            </Flex>
          </Box>
        </Flex>
      </Container>
      <RelatedPosts 
        posts={relatedPosts} 
      />
    </div>
  )
}