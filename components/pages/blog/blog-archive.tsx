"use client"
import { useState } from 'react'
import BlogCard from '@/components/shared/blog-card'
import Container from '@/components/global/container'
import BlogArchiveFilter from './blog-archive-filter'
import { Post, PostCategory } from '@/types/documents/post'

export default function BlogArchive({ posts, categories, heading }: {
  posts: Post[]
  heading: string
  categories: PostCategory[]
}) {

  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)

  function handleFilterPosts(slug: string) {
    if (slug === 'all') return setFilteredPosts(posts);
    setFilteredPosts(posts.filter(post => post.category.slug === slug));
  }

  return (
    <>
      <header className='pt-8 md:pt-10'>
        <Container className="flex flex-col md:flex-row md:items-center justify-between">
          <h1 className='-ml-1 text-3xl md:text-5xl font-light leading-none'>
            {heading}
          </h1>
          <BlogArchiveFilter
            categories={categories}
            handleFilterPosts={handleFilterPosts}
          />
        </Container>
      </header>
      <section>
        <Container>
          {filteredPosts.length > 0 ? 
            <Posts posts={filteredPosts} /> 
            : 
            <NoPosts />
          }
        </Container>
      </section>
    </>
  )
}

function Posts({ posts }: { 
  posts: Post[] 
}) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 pt-10 mb-8 md:mb-28 border-t border-t-[#efeff1]'>
      {posts.map((post) => (
        <li key={post._id}>
          <BlogCard 
            key={post._id} 
            post={post} 
          />  
        </li>
      ))}
    </ul>
  )
}

function NoPosts() {
  return (
    <div className='flex-col items-start mt-10 pt-16 text-center mb-12 md:mb-20 border-t border-t-[#efeff1]'>
      <div>
        <span className='text-xl'>
          No Posts Found
        </span>
      </div>
    </div>
  )
}