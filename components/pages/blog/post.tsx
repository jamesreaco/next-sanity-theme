"use client"
import { Post } from '@/types';
import PostContent from './post-content';
import PostHeader from '@/components/pages/blog/post-header';
import PostAuthor from '@/components/pages/blog/post-author';
import Container from '@/components/global/container';
import PostTableOfContents from './post-table-of-contents';
import RelatedPosts from '@/components/pages/blog/related-posts';
import ScrollProgress from '@/components/global/scroll-progress';

interface PostProps {
  post: Post
}

export default function Post({ post }: PostProps) {

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
    <div className='h-full z-[200] relative bg-[#F6F6F1]'>
      <ScrollProgress />
      <Container classNames='flex flex-col xl:flex-row gap-[40px] relative'>
        <div className='hidden xl:block flex-1 lg:sticky top-[6px] left-0 h-screen border-l border-r'>
          <PostTableOfContents content={post.content}/>
        </div>
        <div className='mt-[40px] flex-[2.2]'>
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
        </div>
        <div className='flex-1 xl:sticky mt-[40px] top-[40px] left-0 h-screen border-l'>
          <div className='flex flex-col xl:pl-[30px]'>
            <PostAuthor 
              name={author.name}
              description={author.description}
              image={author.image}
            />
          </div>
        </div>
      </Container>
      <RelatedPosts 
        posts={relatedPosts} 
      />
    </div>
  )
}