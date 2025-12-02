/**
 * Project Detail Page (Dynamic Route)
 *
 * Displays detailed information about a specific project.
 *
 * This page is dynamically generated at build time for each
 * project in the projects-data.ts file.
 *
 * URL: /projects/[slug]
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  getProjectBySlug,
  getProjectSlugs,
  getAllProjects,
} from '@/lib/projects-data'
import FadeIn from '@/components/animations/FadeIn'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import BackButton from '@/components/ui/BackButton'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'website',
      images: project.image ? [project.image] : [],
    },
  }
}

// Generate static paths for all projects at build time
export async function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <section className="pt-8">
        <div className="container-custom">
          <FadeIn>
            <BackButton />
          </FadeIn>
        </div>
      </section>

      {/* Project Header */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              {project.category && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
                  {project.category}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-foreground-secondary mb-6">
                {project.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-4 mb-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" icon={<FiExternalLink />}>
                      View Live Demo
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" icon={<FiGithub />}>
                      View Source Code
                    </Button>
                  </a>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="relative w-full h-[400px] bg-background-tertiary rounded-lg overflow-hidden border border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-16 bg-background-secondary">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Technologies */}
              <FadeIn delay={0.3}>
                <Card>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-background-secondary text-foreground-secondary rounded-lg border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              {/* Date */}
              <FadeIn delay={0.4}>
                <Card>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Completion Date
                  </h3>
                  <p className="text-foreground-secondary">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </p>
                </Card>
              </FadeIn>

              {/* Category */}
              <FadeIn delay={0.5}>
                <Card>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Project Type
                  </h3>
                  <p className="text-foreground-secondary">
                    {project.category || 'Web Development'}
                  </p>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.6}>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                About This Project
              </h2>
              <div className="prose prose-invert max-w-none">
                <div className="text-foreground-secondary whitespace-pre-line leading-relaxed">
                  {project.longDescription}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              More Projects
            </h2>
          </FadeIn>
          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
