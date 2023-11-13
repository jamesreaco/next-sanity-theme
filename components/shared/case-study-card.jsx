import Link from 'next/link'
import Image from 'next/image'

export default function CaseStudyCard({ caseStudy }) {
  return (
    <article 
      key={caseStudy.title} 
      className='w-full relative cursor-pointer overflow-hidden group'
    >
      <Link 
        href={`/case-studies/${caseStudy.slug}`}
      >
        <Image 
          src={caseStudy.image}
          width={580}
          height={800}
          sizes="(max-width: 640px) 320px, (max-width: 1600px) 584px"
          alt={caseStudy.title}
          className='w-[100%] h-full object-cover transition md:hover:scale-[1.02] '
        />
        <div className='p-[1rem] absolute bottom-0 left-0 right-0 transition-all md:group-hover:p-[2rem]'>
          <div className='flex items-center justify-between py-2 md:py-3 px-4 md:px-5 text-base md:text-lg tracking-widest cursor-pointer group rounded-none bg-[#f6f6f2] text-[#000]'>
            {caseStudy.title} 
            <Image 
              src="/images/link-icon.png"
              width={12}
              height={12}
              alt="Link icon"
              className='ml-8 md:ml-12 transition group-hover:rotate-45'
              style={{
                filter: 'invert(0.8)'
              }}
            />
          </div>
        </div>
      </Link>
    </article>
  )
}
