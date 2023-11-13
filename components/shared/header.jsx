import Container from '../global/container'

export default function Header({ heading }) {
  return (
    <header className='mt-[30px] md:mt-[40px]'>
      <Container>
        <h1 className='-ml-1 md:text-center text-[8vw] md:text-[6vw] font-light leading-none'>
          {heading}
        </h1>
      </Container>
    </header>
  )
}
