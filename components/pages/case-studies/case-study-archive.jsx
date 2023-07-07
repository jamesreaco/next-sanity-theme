import CaseStudyCard from '@/components/shared/case-study-card'

export default function CaseStudyArchive({ caseStudies }) {
  return (
    <div className='grid grid-cols-2 gap-4 mt-16 mb-16'>
      {caseStudies.map(caseStudy => (
        <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
      ))}
    </div>
  )
}
