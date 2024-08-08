import Link from 'next/link'
import Image from 'next/image'
import { CaseStudy } from '@/types/documents/case-study'
import { FiArrowUpRight } from 'react-icons/fi'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {

  const { title, slug, image } = caseStudy

  return (
    <article 
      key={title} 
      className='w-full h-full relative rounded-lg cursor-pointer overflow-hidden group'
    >
      <Link 
        href={`/case-studies/${slug}`}
      >
        <Image 
          src={image}
          width={580}
          height={800}
          sizes="(max-width: 640px) 320px, (max-width: 1600px) 584px"
          alt={title}
          className='w-full h-full object-cover transition md:hover:scale-[1.02] '
        />
        <div className='p-[1rem] absolute bottom-0 left-0 right-0 transition-all md:group-hover:p-[2rem]'>
          <div className='flex items-center justify-between py-2 md:py-3 px-4 md:px-5 text-base md:text-lg tracking-widest cursor-pointer group rounded-md bg-[#f6f6f2] text-black'>
            {title} 
            <FiArrowUpRight 
              size={20}
              className='ml-8 md:ml-12 transition group-hover:rotate-45 text-black'
            />
          </div>
        </div>
      </Link>
    </article>
  )
}
