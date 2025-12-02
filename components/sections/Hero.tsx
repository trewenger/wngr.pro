'use client'

/**
 * Hero Component
 *
 * Homepage hero section with:
 * - Animated greeting and introduction
 * - Call-to-action buttons
 * - Interactive background effects
 *
 * Customize the text content below to match your personal brand.
 */

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiGithub, FiMail, FiLinkedin, } from 'react-icons/fi'
import { SiIndeed } from 'react-icons/si'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/animations/FadeIn'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-start pt-7 justify-center overflow-hidden md:items-center md:pt-0">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(79, 193, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(147, 112, 219, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(79, 193, 255, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <FadeIn delay={0.1}>
            <motion.p
              className="text-accent font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, my name is
            </motion.p>
          </FadeIn>

          {/* Name */}
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              <span className="text-gradient">Tre Wenger</span>
            </h1>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.3}>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground-secondary mb-6">
              I build exceptional technical solutions
            </h2>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.4}>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto mb-8">
              I’m a full-stack engineer who builds clean, functional, and modern digital experiences. 
              I focus on web apps, developer tools, and AI/ML integrations.            
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.5}>
            <div className="flex flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button variant="primary" size="md" icon={<FiArrowRight />}>
                  View My Work
                </Button>
              </Link>
              {/*
              <Link href="/contact">
                <Button variant="outline" size="md" icon={<FiMail />}>
                  Get In Touch
                </Button>
              </Link>
              */}
            </div>
          </FadeIn>

          {/* Social Links */}
          <div className="mt-12 flex gap-6 justify-center">
            <FadeIn delay={0.6}>
              <motion.p
                className='text-xl flex text-accent'>
                Get in touch:
              </motion.p>
            </FadeIn>
          </div>

          <div className="mt-4 flex gap-6 justify-center">
            <motion.a
              href="https://github.com/trewenger"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground-secondary hover:text-accent transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.6, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tre-wenger-618314398"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground-secondary hover:text-accent transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.6, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>

            <Link href="/contact">
              <motion.p
                className="block text-foreground-secondary hover:text-accent transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.6, y: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="w-6 h-6" />
              </motion.p>
            </Link>

            <motion.a
              href="https://profile.indeed.com/p/qczsl06"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground-secondary hover:text-accent transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              whileHover={{ scale: 1.6, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiIndeed className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Scroll Indicator - Centered with content */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-6 h-10 border-2 border-foreground-tertiary rounded-full flex justify-center">
                <motion.div
                  className="w-1.5 h-3 bg-accent rounded-full mt-2"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
