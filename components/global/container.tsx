import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority'

const containerVariants = cva(
  'h-full mx-auto my-0',
  {
    variants: {
      variant: {
        default:
          'max-w-8xl px-6 md:px-12',
        fullWidth:
          'max-w-full px-0 md:px-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants>{}

export default function Container(props: ContainerProps) {

  const { variant, className, children } = props
 
  return (
    <div className={cn(containerVariants({ variant, className }))}>
      {children}
    </div>
  )
}
