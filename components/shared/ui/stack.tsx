import { cn } from "@/utils/cn";

interface StackProps extends React.HTMLAttributes<HTMLDivElement>{}

export default function Stack(props: StackProps) {

  const { className, children } = props

  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}