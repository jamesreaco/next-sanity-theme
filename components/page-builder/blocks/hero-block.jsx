import Button from '@/components/shared/button'
import Image from 'next/image'

export default function HeroBlock({ block }) {
  return (
    <section className='flex justify-between' style={{ 
      marginTop: `${block.marginTop * 0.0625}rem`,
      marginBottom: `${block.marginBottom * 0.0625}rem` 
    }}>
      <div className='flex items-start flex-col'>
        <h1 className='-ml-2 text-[12vw] font-light leading-none'>
          {block.heading}
        </h1>
        <p className='max-w-[30rem] mt-20 mb-12 text-2xl font-light'>
          {block.paragraph}
        </p>
        <Button 
          text={block.buttonText} 
          destination={`${block.buttonUrl}`} 
        />
      </div>
      <Image 
        src="/images/headshot-rounded.png"
        width={250}
        height={350}
        alt='Image of Brooke'
        className='object-contain'
      />
    </section>
  )
}
