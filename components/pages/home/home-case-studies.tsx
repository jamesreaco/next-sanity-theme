"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import CaseStudyCard from '@/components/shared/case-study-card';
import Container from '@/components/global/container';
import { CaseStudy } from "@/types";

interface HomeCaseStudiesProps {
  caseStudies: CaseStudy[]
}

export default function HomeCaseStudies({ caseStudies }: HomeCaseStudiesProps) {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <section className="relative mt-12 mb-6 md:mb-12 pt-28 md:pt-64 overflow-x-hidden">
      <Container>
        <motion.div 
          className='-left-[640px] top-0 absolute text-[64px] md:text-[160px] font-extralight whitespace-nowrap' 
          style={{ x }}
        >
          Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies
        </motion.div>
        <div className='w-full grid lg:grid-cols-3 gap-8 md:gap-14 lg:gap-6'>
          {caseStudies?.map((item) => (
            <CaseStudyCard key={item._id} caseStudy={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}