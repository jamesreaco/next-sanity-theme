import Container from '@/components/global/container'
import Button from '@/components/shared/button'
import Image from 'next/image'

export default function HomeHero({ 
  heading,
  paragraph,
  image,
  btnText,
  btnDestination
}) {
  return (
    <Container>
      <div className='mt:0 md:mt-20 flex flex-col-reverse md:flex-row justify-between'>
        <div className='flex items-start flex-col'>
          <h1 className='-ml-1 md:-ml-2 text-[12vw] font-light leading-none'>
            {heading}
          </h1>
          <p className='max-w-[30rem] mt-6 md:mt-20 mb-8 md:mb-12 text-[1.2rem] md:text-2xl font-light'>
            {paragraph}
          </p>
          <Button 
            text={btnText} 
            destination={`${btnDestination}`} 
            variant="dark"
          />
        </div>
        <Image 
          src={image}
          width={250}
          height={350}
          sizes="(max-width: 640px) 100px"
          alt='Image of Brooke'
          className='w-[6rem] md:w-[12rem] mb-10 md:mb-0 mt-10 md:mt-20 object-contain'
        />
      </div>
    </Container>
  )
}
