import Link from 'next/link'
import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { FiArrowUpRight } from 'react-icons/fi'

const buttonVariants = cva(
  'flex items-center justify-between text-sm md:text-base tracking-wide cursor-pointer group transition hover:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-zinc-950 text-zinc-100 hover:bg-zinc-900',
        outline:
          'border hover:border-zinc-300',
        },
      size: {
        default: 'h-12 px-4 md:px-5 rounded-lg',
        large: 'h-14 px-6 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {}

export default function Button(props: ButtonProps) {

  const { href, variant, size, className, children } = props

  return (
    <Link 
      href={`${href}`} 
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Link>
  )
}