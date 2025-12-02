/**
 * Home Page
 *
 * Main landing page featuring:
 * - Hero section with introduction
 * - Featured projects showcase
 *
 * This is the entry point of your portfolio.
 */

import Hero from '@/components/sections/Hero'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import { getFeaturedProjects } from '@/lib/projects-data'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { FiArrowRight } from 'react-icons/fi'
import FadeIn from '@/components/animations/FadeIn'

export default function Home() {
  const featuredProjects = getFeaturedProjects()

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="section-padding bg-background-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Featured Projects
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-lg text-foreground-secondary">
                  Some of my recent work that I'm proud of
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredProjects.map((project, index) => (
                <FadeIn key={project.slug} delay={index * 0.1} direction="up">
                  <div className="h-full">
                    {/* Using dynamic import to avoid circular dependency issues */}
                    <Link href={`/projects/${project.slug}`} className="block h-full">
                      <div className="card-base card-hover h-full p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-foreground-secondary text-sm mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-background-secondary text-foreground-secondary rounded border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="text-center">
                <Link href="/projects">
                  <Button variant="outline" size="lg" icon={<FiArrowRight />}>
                    View All Projects
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      )}
    </>
  )
}
