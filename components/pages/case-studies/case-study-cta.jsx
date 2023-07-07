import Container from '@/components/global/container'
import Button from '@/components/shared/button'

export default function CaseStudyCTA({ 
  heading, 
  text,
  buttonText,
  buttonDestination
}) {
  return (
    <Container>
      <section className='flex flex-col items-center justify-center my-10 p-20 bg-white border rounded-lg'>
        <h5 className='text-3xl sm:text-4xl text-gray-800 text-center'>
          {heading}
        </h5>
        <p className='mt-3 mb-10 text-gray-600 text-center'>
          {text}
        </p>
        <Button 
          text={buttonText}
          destination={`${buttonDestination}`}
          variant="dark"
        />
      </section>
    </Container>
  )
}
