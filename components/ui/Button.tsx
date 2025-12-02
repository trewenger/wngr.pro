/**
 * Button Component
 *
 * Reusable button with multiple variants and sizes.
 *
 * Usage:
 *   <Button variant="primary" size="md" onClick={handleClick}>
 *     Click Me
 *   </Button>
 *
 * To extend: Add new variants in the 'variants' object below
 */

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  icon?: ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      'border-2 border-black bg-accent text-white hover:bg-accent-hover shadow-lg hover:shadow-xl',
    secondary:
      'bg-background-tertiary text-foreground hover:bg-background-secondary',
    outline:
      'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-foreground hover:bg-background-tertiary',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(
        'btn-base font-medium rounded-lg transition-all duration-300',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="animate-spin">⏳</span>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </button>
  )
}
