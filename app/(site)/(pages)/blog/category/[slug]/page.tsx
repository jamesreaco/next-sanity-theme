import { Metadata } from 'next'
import { 
  getAllPostCategories, 
  getAllPostsByCategory, 
  getPostCategoryBySlug 
} from '@/sanity/lib/sanity.fetch'
import PostArchive from '@/components/pages/blog/post-archive'
import BlogCategories from '@/components/pages/blog/blog-categories'
import BlogArchiveHeader from '@/components/pages/blog/blog-archive-header'

interface BlogCategorySlugPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogCategorySlugPageProps): Promise<Metadata> {

  const category = await getPostCategoryBySlug(params.slug)

  return {
    title: `${category.title} | Blog`,
    description: `Browse articles about ${category.title.toLowerCase()}.`,
    keywords: `${category.title.toLowerCase()}, blog, post, article`,
  }
}

export default async function BlogCategorySlugPage({ params }: BlogCategorySlugPageProps) {

  const categories = await getAllPostCategories()
  const category = await getPostCategoryBySlug(params.slug)
  const posts = await getAllPostsByCategory(params.slug)

  return (
    <> 
      <BlogArchiveHeader heading={category.title}>
        <BlogCategories categories={categories} />
      </BlogArchiveHeader>
      <PostArchive posts={posts} />
    </>
  )
}
