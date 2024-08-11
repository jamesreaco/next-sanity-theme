"use client"
import { CaseStudy } from "@/types/documents/case-study";
import Container from '@/components/global/container';
import { motion, useScroll, useTransform } from "framer-motion";
import CaseStudyCard from '@/components/shared/case-study-card';

export default function HomeCaseStudies({ caseStudies }: {
  caseStudies: CaseStudy[]
}) {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <section className="relative mt-12 md:mt-20 mb-6 md:mb-12 pt-28 md:pt-60 overflow-x-hidden">
      <Container>
        <motion.div 
          className='-left-[640px] top-0 absolute text-[3.8rem] md:text-[8rem] tracking-tighter font-extralight whitespace-nowrap' 
          style={{ x }}
        >
          {([...Array(6)].map(() => 'Case Studies ✦ ')).join("")}
        </motion.div>
        <ul className='grid lg:grid-cols-3 gap-8 md:gap-14 lg:gap-8 w-full'>
          {caseStudies?.map((item) => (
            <li key={item._id}>
              <CaseStudyCard caseStudy={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}