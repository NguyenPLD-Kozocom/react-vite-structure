import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/lib/utils'

const labelVariants = cva(
  'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-foreground',
        muted: 'text-muted-foreground',
        destructive: 'text-destructive',
        link: 'text-gray-500 underline-offset-4 block w-fit hover:text-white hover:underline cursor-pointer',
        h1: 'text-4xl font-bold leading-tight tracking-tight text-white',
        h2: 'text-3xl font-bold leading-tight tracking-tight text-white',
        h3: 'text-2xl font-semibold leading-snug tracking-tight text-white',
        h4: 'text-xl font-semibold leading-snug tracking-tight text-white',
        h5: 'text-lg font-medium leading-normal text-white',
        h6: 'text-base font-medium leading-normal text-white',
        p: 'text-base leading-relaxed text-white font-normal'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

type LabelBaseProps = React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants> & {
    asChild?: boolean
    variant?: Exclude<VariantProps<typeof labelVariants>['variant'], 'link'>
  }

type LabelLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: 'link'
  asChild?: false
}

type LabelProps = LabelBaseProps | LabelLinkProps

function Label({ className, variant, asChild = false, ...props }: LabelProps) {
  const baseClassName = cn(labelVariants({ variant, className }))
  const commonProps = {
    'data-slot': 'label',
    'data-variant': variant,
    className: baseClassName
  }

  if (asChild) {
    return <Slot {...commonProps} {...props} />
  }

  // Render as HTML element for typography variants
  switch (variant) {
    case 'link':
      return <a {...commonProps} {...(props as React.ComponentProps<'a'>)} />
    case 'h1':
      return <h1 {...commonProps} {...(props as React.ComponentProps<'h1'>)} />
    case 'h2':
      return <h2 {...commonProps} {...(props as React.ComponentProps<'h2'>)} />
    case 'h3':
      return <h3 {...commonProps} {...(props as React.ComponentProps<'h3'>)} />
    case 'h4':
      return <h4 {...commonProps} {...(props as React.ComponentProps<'h4'>)} />
    case 'h5':
      return <h5 {...commonProps} {...(props as React.ComponentProps<'h5'>)} />
    case 'h6':
      return <h6 {...commonProps} {...(props as React.ComponentProps<'h6'>)} />
    case 'p':
      return <p {...commonProps} {...(props as React.ComponentProps<'p'>)} />
    default:
      return <LabelPrimitive.Root {...commonProps} {...(props as React.ComponentProps<typeof LabelPrimitive.Root>)} />
  }
}
export { Label }
