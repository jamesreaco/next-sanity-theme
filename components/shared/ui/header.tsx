import { cn } from "@/utils/cn";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement>{}

export default function Header(props: HeaderProps) {

  const { className, children } = props

  return (
    <header className={cn(className)}>
      {children}
    </header>
  )
}