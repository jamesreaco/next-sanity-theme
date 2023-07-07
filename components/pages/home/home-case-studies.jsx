import { getLatestCaseStudies } from '@/sanity/utils';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import CaseStudyCard from '@/components/shared/case-study-card';

export default function HomeCaseStudies() {

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
    <section className='relative mt-16 mb-28 pt-28 md:pt-64'>
      <motion.div 
        className='-left-[40rem] top-0 absolute text-[4rem] md:text-[10rem] font-extralight whitespace-nowrap' 
        style={{ x }}
      >
        Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies
      </motion.div>
      <div className='flex flex-col md:flex-row gap-6 md:gap-4'>
        {caseStudies.map((item) => (
          <CaseStudyCard key={item._id} caseStudy={item} />
        ))}
      </div>
    </section>
  )
}