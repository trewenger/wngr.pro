'use client'

/**
 * ProjectCard Component
 *
 * Displays a project preview card with:
 * - Project thumbnail
 * - Title and description
 * - Technology tags
 * - Hover animations
 * - Links to live demo and GitHub
 *
 * Usage:
 *   <ProjectCard project={projectData} />
 */

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Project } from '@/types/project'
import Card from '@/components/ui/Card'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card hover padding="none" className="overflow-hidden h-full flex flex-col">
        {/* Project Image */}
        <Link href={`/projects/${project.slug}`} className="relative block">
          <div className="relative w-full h-48 bg-background-tertiary overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-background/0 hover:bg-background/80 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
            <span className="text-accent font-medium flex items-center gap-2">
              View Details <FiExternalLink />
            </span>
          </div>
        </Link>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category Badge */}
          {project.category && (
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full w-fit mb-3">
              {project.category}
            </span>
          )}

          {/* Title */}
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-xl font-bold text-foreground mb-2 hover:text-accent transition-colors">
              {project.title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-foreground-secondary text-sm mb-4 flex-1">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-background-secondary text-foreground-secondary rounded border border-border"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs text-foreground-tertiary">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-border">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
