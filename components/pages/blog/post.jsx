import PostHeader from '@/components/pages/blog/post-header';
import PostAuthor from '@/components/pages/blog/post-author';
import PostContent from './post-content';

export default function Post({ post }) {

  const { author, content } = post

  return (
    <>
      <PostHeader 
        image={post.image}
        category={post.category.title}
        readTime={post.readTime}
        title={post.title}
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
