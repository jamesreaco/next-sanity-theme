import { useEffect, useState } from 'react';
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion";
import { getLatestCaseStudies } from '@/sanity/utils';
import Button from '@/components/shared/button'

export default function LatestCaseStudiesBlock({ block }) {

  const [caseStudies, setCaseStudies] = useState([])

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  useEffect(() => {
    fetchLatestCaseStudies()
  }, [])

  const fetchLatestCaseStudies = async () => {
    const latestCaseStudies = await getLatestCaseStudies()
    setCaseStudies(latestCaseStudies)
  }

  return (
    <section className='relative mt-16 mb-32 pt-64' style={{ 
      marginTop: `${block.marginTop}px`,
      marginBottom: `${block.marginBottom}px` 
    }}>
      <motion.div className='-left-[40rem] top-0 absolute text-[10rem] font-extralight whitespace-nowrap' style={{ x }}>
        Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies
      </motion.div>
      <div className='flex gap-4'>
        {caseStudies.map((item) => (
          <div key={item.title} className='relative cursor-pointer overflow-hidden rounded-lg group'>
            <Image 
              src={item.image}
              width={800}
              height={1000}
              alt={item.title}
              className='w-full h-full object-cover transition hover:scale-[1.02]'
            />
            <div className='p-[1rem] absolute bottom-0 left-0 right-0 transition-all group-hover:p-[2rem]'>
              <Button text={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}