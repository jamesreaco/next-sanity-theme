export default function HeaderBlock({ block }) {
  return (
    <header className='mt-14 mb-10 mx-auto' style={{
      maxWidth: block.headerWidth === 'narrow' ? '600px' : '1280px'
    }}>
      <h1 
        className='-ml-1 text-5xl md:text-6xl font-light leading-none' 
      >
        {block.heading}
      </h1>
    </header>
  )
}


