'use client'

/**
 * Custom 404 Not Found Page
 *
 * Shown when a user navigates to a non-existent route.
 * Provides helpful navigation options to get back on track.
 */

import Link from 'next/link'
import Button from '@/components/ui/Button'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import FadeIn from '@/components/animations/FadeIn'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            {/* 404 Animation */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
              <div className="w-32 h-1 bg-accent mx-auto rounded-full" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-foreground-secondary mb-8">
              Oops! The page you're looking for doesn't exist. It might have been
              moved or deleted, or perhaps you mistyped the URL.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="primary" size="lg" icon={<FiHome />}>
                  Go Home
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                icon={<FiArrowLeft />}
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.4}>
            <div className="mt-12">
              <p className="text-sm text-foreground-tertiary mb-4">
                Or try one of these:
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/about"
                  className="text-accent hover:text-accent-hover transition-colors link-hover"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-accent hover:text-accent-hover transition-colors link-hover"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="text-accent hover:text-accent-hover transition-colors link-hover"
                >
                  Contact
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
