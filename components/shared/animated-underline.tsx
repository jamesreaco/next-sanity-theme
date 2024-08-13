import { cn } from '@/utils/cn'

export default function AnimatedUnderline({ className: additionalStyles }: {
  className?: string
}) {

  const baseStyles = "absolute -bottom-2 left-0 block h-0.5 w-full max-w-0 group-hover:max-w-full transition-all duration-500 bg-black"

  return (
    <span className={cn( baseStyles, additionalStyles )}></span>
  )
}
