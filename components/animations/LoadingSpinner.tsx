'use client'

/**
 * LoadingSpinner Component
 *
 * Animated loading spinner with multiple style variants.
 *
 * Usage:
 *   <LoadingSpinner size="lg" variant="dots" />
 */

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'pulse'
  className?: string
}

export default function LoadingSpinner({
  size = 'md',
  variant = 'spinner',
  className = '',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  if (variant === 'spinner') {
    return (
      <motion.div
        className={`${sizeClasses[size]} border-2 border-accent border-t-transparent rounded-full ${className}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    )
  }

  if (variant === 'dots') {
    return (
      <div className={`flex gap-2 ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-accent"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    )
  }

  // Pulse variant
  return (
    <motion.div
      className={`${sizeClasses[size]} rounded-full bg-accent ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
