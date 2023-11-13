import Container from "@/components/global/container";

export default function HeaderBlock({ block }) {
  return (
    <header className="pt-[20px] md:pt-[40px] pb-[22px] md:pb-[42px] border-b">
      <Container>
        <div className='mx-auto' 
          style={{
            maxWidth: block.headerWidth === 'narrow' ? '600px' : '1400px'
          }}
        >
          <h1 
            className='-ml-1 text-[26px] md:text-[48px] font-light leading-none' 
          >
            {block.heading}
          </h1>
        </div>
      </Container>
    </header>
  )
}