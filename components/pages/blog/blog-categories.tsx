"use client"
import { PostCategory } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BlogCategoriesProps {
  categories: PostCategory[]
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {

  const pathname = usePathname()

  return (
    <div className='mt-[20px] md:mt-0 flex flex-wrap gap-[12px]'>
      <Link
        href="/blog"
        className='px-[10px] md:px-[12px] md:py-[6px] border'
        style={{
          backgroundColor: pathname === '/blog' ? '#000' : '#fff',
          color: pathname === '/blog' ? '#fff' : '#000',
          borderColor: pathname === '/blog' ? '#000' : '#e5e7eb'
        }}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/category/${category.slug}`}
          className='px-[10px] md:px-[12px] md:py-[6px] border'
          style={{
            backgroundColor: pathname === `/blog/category/${category.slug}` ? '#000' : '#fff',
            color: pathname === `/blog/category/${category.slug}` ? '#fff' : '#000',
            borderColor: pathname === `/blog/category/${category.slug}` ? '#000' : '#e5e7eb'
          }}
        >
          {category.title}
        </Link>
      ))}
    </div> 
  )
}
