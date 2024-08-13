"use client"
import PostContent from './post-content';
import { type Post } from '@/types/documents/post';
import Container from '@/components/global/container';
import PostTableOfContents from './post-table-of-contents';
import PostHeader from '@/components/pages/post/post-header';
import PostAuthor from '@/components/pages/post/post-author';
import RelatedPosts from '@/components/pages/post/related-posts';
import ScrollProgress from '@/components/shared/scroll-progress';

export default function Post({ post }: { post: Post }) {

  const { title, author, content, image, category, readTime, relatedPosts } = post

  return (
    <div className='z-[200] relative h-full bg-[#F6F6F1]'>
      <ScrollProgress />
      <Container>
        <div className='flex flex-col xl:flex-row gap-10 relative'>
          <div className='hidden xl:block flex-1 mt-9 lg:sticky top-9 left-0 h-screen border rounded-tr-xl rounded-tl-xl overflow-hidden'>
            <PostTableOfContents content={post.content}/>
          </div>
          <div className='mt-10 flex-[2.2]'>
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
          <div className='flex-1 xl:sticky mt-10 top-10 left-0 h-screen border-l flex flex-col xl:pl-8'>
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