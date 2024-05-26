import { cn } from "@/utils/cn";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement>{}

export default function Flex(props: FlexProps) {

  const { className, children } = props

  return (
    <div className={cn(`flex`, className, {})}>
      {children}
    </div>
  )
}