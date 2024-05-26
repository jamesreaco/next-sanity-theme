import { cn } from "@/utils/cn";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement>{}

export default function Box(props: BoxProps) {

  const { className, children } = props

  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}