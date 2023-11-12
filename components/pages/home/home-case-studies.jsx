"use client"
import { getLatestCaseStudies } from '@/sanity/utils';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import CaseStudyCard from '@/components/shared/case-study-card';
import Container from '@/components/global/container';

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
    <Container fullWidth={true}>
      <div className='relative mt-12 md:mt-12 pt-28 md:pt-64'>
        <motion.div 
          className='-left-[40rem] top-0 absolute text-[4rem] md:text-[10rem] font-extralight whitespace-nowrap' 
          style={{ x }}
        >
          Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies
        </motion.div>
        <div className='w-full px-[20px] md:px-[0px] grid md:grid-cols-3 gap-[20px] md:gap-[0px]'>
          {caseStudies.map((item) => (
            <CaseStudyCard key={item._id} caseStudy={item} />
          ))}
        </div>
      </div>
    </Container>
  )
}