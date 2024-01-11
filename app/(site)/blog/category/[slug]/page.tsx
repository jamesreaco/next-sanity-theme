import { getAllPostCategories, getAllPostsByCategory, getPostCategoryBySlug } from '@/sanity/lib/sanity.fetch'
import PostArchive from '@/components/pages/blog/post-archive'
import BlogCategories from '@/components/pages/blog/blog-categories'
import BlogArchiveHeader from '@/components/pages/blog/blog-archive-header'

export const dynamic = 'force-dynamic'

interface BlogCategorySlugPageProps {
  params: { slug: string }
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
