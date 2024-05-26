import { cn } from "@/utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement>{}

export default function Section(props: SectionProps) {

  const { className, children } = props

  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}