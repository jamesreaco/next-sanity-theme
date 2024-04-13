import { Metadata } from 'next'
import { 
  getAllPostCategories, 
  getAllPosts, 
  getBlogPage 
} from '@/sanity/lib/sanity.fetch'

// components
import PostArchive from '@/components/pages/blog/post-archive'
import BlogCategories from '@/components/pages/blog/blog-categories'
import BlogArchiveHeader from '@/components/pages/blog/blog-archive-header'

export async function generateMetadata(): Promise<Metadata> {

  const page = await getBlogPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function BlogPage() {

  const page = await getBlogPage()
  const posts = await getAllPosts()
  const categories = await getAllPostCategories()

  return (
    <> 
      <BlogArchiveHeader heading={page.heading}>
        <BlogCategories categories={categories} />
      </BlogArchiveHeader>
      <PostArchive posts={posts} />
    </>
  )
}