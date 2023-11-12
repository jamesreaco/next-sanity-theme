"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import CaseStudyCard from '@/components/shared/case-study-card';
import Container from '@/components/global/container';

export default function HomeCaseStudies({ caseStudies }) {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <Container fullWidth={true}>
      <div className='relative mt-12 md:mt-12 pt-28 md:pt-64'>
        <motion.div 
          className='-left-[40rem] top-0 absolute text-[4rem] md:text-[10rem] font-extralight whitespace-nowrap' 
          style={{ x }}
        >
          Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies
        </motion.div>
        <div className='w-full px-6 md:px-[0px] grid md:grid-cols-3 gap-6 md:gap-0'>
          {caseStudies?.map((item) => (
            <CaseStudyCard key={item._id} caseStudy={item} />
          ))}
        </div>
      </div>
    </Container>
  )
}