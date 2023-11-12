import Container from './container'

export default function Page({ heading, children }) {
  return (
    <>
      <Container>
        <header className='mt-[30px] md:mt-[40px]'>
          <h1 className='-ml-1 md:text-center text-[8vw] md:text-[6vw] font-light leading-none'>
            {heading}
          </h1>
        </header>
      </Container>
      {children}
    </>
  )
}
