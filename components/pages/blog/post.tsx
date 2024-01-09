import { Post } from '@/types';
import PostContent from './post-content';
import PostHeader from '@/components/pages/blog/post-header';
import PostAuthor from '@/components/pages/blog/post-author';

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
    readTime
  } = post

  return (
    <>
      <PostHeader 
        image={image}
        category={category.title}
        readTime={readTime}
        title={title}
      />
      
      <PostContent 
        content={content} 
      />

      <PostAuthor 
        name={author.name}
        description={author.description}
        image={author.image}
      />
    </>
  )
}
