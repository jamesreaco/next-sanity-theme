import { cn } from "@/utils/cn";

interface GridProps extends React.HTMLAttributes<HTMLDivElement>{}

export default function Grid(props: GridProps) {

  const { className, children } = props

  return (
    <ul className={cn(`grid`, className, {})}>
      {children}
    </ul>
  )
}