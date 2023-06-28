import Button from '@/components/shared/button'

export default function CaseStudyCTA() {
  return (
    <section className='flex flex-col items-center justify-center my-10 p-20 bg-white border rounded-lg'>
      <h5 className='text-3xl sm:text-4xl text-gray-800 text-center'>
        Like what you see?
      </h5>
      <p className='mt-3 mb-10 text-gray-600 text-center'>
        Let's work together!
      </p>
      <Button 
        text="Hire Me"
        destination=""
        variant="dark"
      />
    </section>
  )
}
