import Container from "@/components/global/container";

export default function HeaderBlock({ block }) {
  return (
    <Container>
      <header className='mt-[30px] md:mt-[50px] pb-[30px] md:mb-[40px] mx-auto' 
        style={{
          maxWidth: block.headerWidth === 'narrow' ? '600px' : '1400px'
        }}
      >
        <h1 
          className='-ml-1 text-4xl md:text-6xl font-light leading-none' 
        >
          {block.heading}
        </h1>
      </header>
    </Container>
  )
}