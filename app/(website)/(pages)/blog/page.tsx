import { Metadata } from 'next'

import { 
  fetchAllPostCategories, 
  fetchAllPosts, 
  fetchBlogPage 
} from '@/sanity/lib/sanity.fetch'

import BlogArchive from '@/components/pages/blog/blog-archive'

export async function generateMetadata(): Promise<Metadata> {

  const page = await fetchBlogPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function BlogPage() {

  const pageData = await fetchBlogPage()
  const postsData = await fetchAllPosts()
  const categoriesData = await fetchAllPostCategories()

  const [ 
    page, 
    posts, 
    categories
  ] = await Promise.all([pageData, postsData, categoriesData])

  return (
    <BlogArchive 
      posts={posts} 
      categories={categories}
      heading={page.heading}
    />
  )
}