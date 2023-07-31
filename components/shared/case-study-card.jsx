import Link from 'next/link'
import Image from 'next/image'

// components
import Button from './button'

export default function CaseStudyCard({ caseStudy }) {
  return (
    <article key={caseStudy.title} className='relative cursor-pointer overflow-hidden rounded-lg group'>
      <Link 
        href={`/case-studies/${caseStudy.slug}`}
      >
        <Image 
          src={caseStudy.image}
          width={580}
          height={800}
          sizes="(max-width: 640px) 320px, (max-width: 1600px) 584px"
          alt={caseStudy.title}
          className='w-[100%] h-auto object-cover transition md:hover:scale-[1.02] '
        />
        <div className='p-[1rem] absolute bottom-0 left-0 right-0 transition-all md:group-hover:p-[2rem]'>
          <Button 
            destination={`/case-studies/${caseStudy.slug}`}
            text={caseStudy.title} 
            variant="light"
          />
        </div>
      </Link>
    </article>
  )
}
