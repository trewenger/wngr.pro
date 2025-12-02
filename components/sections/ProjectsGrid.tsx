'use client'

/**
 * ProjectsGrid Component
 *
 * Displays a grid of project cards with staggered animations.
 *
 * Usage:
 *   <ProjectsGrid projects={projectsArray} />
 */

import { Project } from '@/types/project'
import ProjectCard from './ProjectCard'
import FadeIn from '@/components/animations/FadeIn'

interface ProjectsGridProps {
  projects: Project[]
  title?: string
  description?: string
}

export default function ProjectsGrid({
  projects,
  title,
  description,
}: ProjectsGridProps) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            {title && (
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {title}
                </h2>
              </FadeIn>
            )}
            {description && (
              <FadeIn delay={0.1}>
                <p className="text-lg text-foreground-secondary">
                  {description}
                </p>
              </FadeIn>
            )}
          </div>
        )}

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.1} direction="up">
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-foreground-secondary">
              No projects found. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
