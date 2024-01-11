import { getAllPostCategories } from '@/sanity/lib/sanity.fetch'
import Link from 'next/link'
import Container from '@/components/global/container'
import Header from '@/components/shared/header'
import { FiChevronRight } from 'react-icons/fi'
import { PostCategory } from '@/types'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Categories | Blog',
  description: 'Browse articles by category.',
}

export default async function BlogCategoryPage() {

  const categories = await getAllPostCategories()

  return (
    <> 
      <Header heading="Blog Categories" />
      <Container classNames='my-[30px] md:my-[60px] grid md:grid-cols-3 gap-[30px]'>
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
      className='p-[20px] flex items-center justify-between border rounded-lg transition md:hover:bg-white group'
    > 
      <span className='text-[17px] md:text-[18px]'>
        {title}
      </span>
      <FiChevronRight size={20} />
    </Link>
  )
}
