import { getAllPostCategories } from '@/sanity/lib/sanity.fetch'
import Link from 'next/link'
import Container from '@/components/global/container'
import Header from '@/components/shared/header'
import { FiChevronRight } from 'react-icons/fi'
import { PostCategory } from '@/types'

export const metadata = {
  title: 'Categories | Blog',
  description: 'Browse articles by category.',
}

export default async function BlogCategoryPage() {

  const categories = await getAllPostCategories()

  return (
    <> 
      <Header heading="Blog Categories" />
      <Container className='my-8 md:my-16 grid md:grid-cols-3 gap-8'>
        {categories.map((category: PostCategory) => (
          <CategoryCard 
            key={category.slug}
            category={category} 
          />
        ))}
      </Container>
    </>
  )
}

interface CategoryCardProps {
  category: PostCategory
}

function CategoryCard({ category }: CategoryCardProps) {

  const { slug, title } = category

  return (
    <Link
      href={`/blog/category/${slug}`}
      className='p-5 flex items-center justify-between border rounded-lg transition md:hover:bg-white group'
    > 
      <span className='md:text-lg'>
        {title}
      </span>
      <FiChevronRight size={20} />
    </Link>
  )
}
