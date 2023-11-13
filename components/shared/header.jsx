import Container from '../global/container'

export default function Header({ children, heading }) {
  return (
    <header className='pt-[20px] md:pt-[40px] pb-[22px] md:pb-[42px] border-b'>
      <Container classNames="flex flex-col md:flex-row md:items-center justify-between">
        <h1 className='-ml-1 text-[26px] md:text-[48px] font-light leading-none'>
          {heading}
        </h1>
        {children}
      </Container>
    </header>
  )
}
