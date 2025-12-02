'use client'

/**
 * FadeIn Animation Component
 *
 * Wraps children with a fade-in animation triggered when
 * the element enters the viewport.
 *
 * Usage:
 *   <FadeIn delay={0.2}>
 *     <YourComponent />
 *   </FadeIn>
 *
 * Props:
 *   - delay: Animation delay in seconds (default: 0)
 *   - duration: Animation duration in seconds (default: 0.5)
 *   - direction: 'up' | 'down' | 'left' | 'right' | 'none'
 */

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className = '',
}: FadeInProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
