/**
 * Projects Page
 *
 * Displays all projects in a grid layout.
 *
 * Features:
 * - All projects displayed with ProjectCard
 * - Animated grid layout
 * - Responsive design
 *
 * Projects are loaded from lib/projects-data.ts
 */

import { Metadata } from 'next'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import ProjectCard from '@/components/sections/ProjectCard'
import { getAllProjects } from '@/lib/projects-data'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse my portfolio of web development projects including full-stack applications, APIs, and more.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
               My <span className="text-gradient">Projects</span> 
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-foreground-secondary text-center max-w-3xl mx-auto">
              A collection of projects I've worked on, showcasing my skills in
              full-stack development, UI/UX design, and problem-solving.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
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
    </div>
  )
}
