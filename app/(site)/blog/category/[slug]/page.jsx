import { getAllPostCategories, getAllPostsByCategory, getPostCategoryBySlug } from '@/sanity/lib/sanity.fetch'
import Header from '@/components/shared/header'
import PostArchive from '@/components/pages/blog/post-archive'
import BlogCategories from '@/components/pages/blog/blog-categories'

export const dynamic = 'force-dynamic'

export default async function BlogCategorySlugPage({ params }) {

  const categories = await getAllPostCategories()
  const category = await getPostCategoryBySlug(params.slug)
  const posts = await getAllPostsByCategory(params.slug)

  return (
    <> 
      <Header heading={category.title}>
        <BlogCategories categories={categories} />
      </Header>
      <PostArchive posts={posts} />
    </>
  )
}
