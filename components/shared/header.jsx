import Container from '../global/container'

export default function Header({ heading }) {
  return (
    <header className='pt-[20px] md:pt-[40px] pb-[22px] md:pb-[42px] border-b'>
      <Container>
        <h1 className='-ml-1 text-[26px] md:text-[4vw] font-light leading-none'>
          {heading}
        </h1>
      </Container>
    </header>
  )
}
