import Image from 'next/image'
import Button from '@/components/shared/button'
import Tag from '@/components/shared/tag'
import Container from '@/components/global/container'

export default function CaseStudyHeader({ 
  title, 
  shortDescription,
  image, 
  url 
}) {
  return (
    <Container>
      <header className='mt-20 -ml-1 flex flex-col items-start'>
        <div className='w-full flex flex-col md:flex-row items-start md:items-end justify-between'>
          <div className='flex flex-col items-start'>
            <Tag text="Case Study" />
            <h1 className='mt-8 text-5xl md:text-7xl font-light'>
              {title}
            </h1>
            <p className='md:w-[30rem] mt-6 leading-7'>
              {shortDescription}
            </p>
          </div>
          <Button 
            text="View Project"
            destination={`${url}`}
            variant="light"
            classNames="mt-8"
          />
        </div>
        <Image 
          src={image}
          width={2000}
          height={600}
          alt={title}
          className='mt-20 h-[40rem] object-cover'
        />
      </header>
    </Container>
  )
}
