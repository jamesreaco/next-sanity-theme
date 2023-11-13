import { getAllPostCategories } from '@/sanity/lib/sanity.fetch'
import Link from 'next/link'
import Container from '@/components/global/container'
import Header from '@/components/shared/header'
import { FiChevronRight } from 'react-icons/fi'

export const dynamic = 'force-dynamic'

export default async function BlogCategoryPage() {

  const categories = await getAllPostCategories()

  return (
    <> 
      <Header heading="Blog Categories" />
      <Container classNames='my-[30px] md:my-[60px] grid md:grid-cols-3 gap-[30px]'>
        {categories.map((category) => (
          <CategoryCard 
            key={category.slug}
            category={category} 
          />
        ))}
      </Container>
    </>
  )
}

function CategoryCard({ category }) {
  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className='p-[20px] flex items-center justify-between border transition md:hover:bg-white group'
    > 
      <span className='text-[17px] md:text-[18px]'>
        {category.title}
      </span>
      <FiChevronRight size={20} />
    </Link>
  )
}
