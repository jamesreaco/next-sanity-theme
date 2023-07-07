import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { getLatestCaseStudies } from '@/sanity/utils';
import CaseStudyCard from '@/components/shared/case-study-card';
import Container from '@/components/global/container';

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
    <Container>
      <div className='relative mt-16 mb-32 pt-64' style={{ 
        marginTop: `${block.marginTop}px`,
        marginBottom: `${block.marginBottom}px` 
      }}>
        <motion.div className='-left-[40rem] top-0 absolute text-[10rem] font-extralight whitespace-nowrap' style={{ x }}>
          Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies ✦ Case Studies
        </motion.div>
        <div className='flex gap-4'>
          {caseStudies.map((item) => (
            <CaseStudyCard key={item._id} caseStudy={item} />
          ))}
        </div>
      </div>
    </Container>
  )
}