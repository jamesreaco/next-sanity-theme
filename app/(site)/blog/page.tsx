import { getAllPostCategories, getAllPosts } from '@/sanity/lib/sanity.fetch'

// components
import Header from '@/components/shared/header'
import PostArchive from '@/components/pages/blog/post-archive'
import BlogCategories from '@/components/pages/blog/blog-categories'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {

  const posts = await getAllPosts()
  const categories = await getAllPostCategories()

  return (
    <> 
      <Header heading="Blog">
        <BlogCategories categories={categories} />
      </Header>
      <PostArchive posts={posts} />
    </>
  )
}

