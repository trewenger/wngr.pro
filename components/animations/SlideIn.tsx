'use client'

/**
 * SlideIn Animation Component
 *
 * Slides content in from specified direction with fade effect.
 *
 * Usage:
 *   <SlideIn from="left" delay={0.3}>
 *     <YourContent />
 *   </SlideIn>
 */

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideInProps {
  children: ReactNode
  from?: 'left' | 'right' | 'top' | 'bottom'
  delay?: number
  duration?: number
  className?: string
}

export default function SlideIn({
  children,
  from = 'left',
  delay = 0,
  duration = 0.6,
  className = '',
}: SlideInProps) {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    top: { x: 0, y: -100 },
    bottom: { x: 0, y: 100 },
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[from],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
