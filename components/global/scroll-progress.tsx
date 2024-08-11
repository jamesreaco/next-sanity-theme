import { useState, useEffect } from 'react';

export default function ScrollProgress() {

  const [scrollPercentage, setScrollPercentage] = useState(0)

  const handleScroll = () => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const percentage = (scrollY / (documentHeight - windowHeight)) * 100
    setScrollPercentage(percentage)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className='h-1 md:h-1.5 bg-[#0E788A] transition-width duration-1 ease-in-out'
        style={{
          width: `${scrollPercentage}%`,
        }}
      />
    </div>
  );
};