/**
 * Projects Data
 *
 * This file contains all project data for the portfolio.
 * To add a new project, simply add a new object to the array below.
 *
 * Each project will automatically:
 * - Appear in the /projects page grid
 * - Generate its own detail page at /projects/[slug]
 * - Show on homepage if featured is true
 *
 * Images should be placed in /public/images/projects/
 */

import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'portfolio-website',
    title: 'Professional Portfolio Website',
    description:
      'A modern, full-stack portfolio website showcasing projects, skills, and experience with a sleek theme, light/dark toggle, and smooth animations.',
    longDescription: `A production-ready portfolio website built from scratch with Next.js, TypeScript, and TailwindCSS, designed to showcase professional work and technical skills.

Key Features:
• Modern Tech Stack - Built with Next.js App Router, TypeScript, and TailwindCSS for optimal performance and developer experience
• Dark Mode - VS Code-inspired dark theme with smooth transitions and persistent user preferences
• Smooth Animations - Page transitions, scroll animations, and hover effects using Framer Motion
• Fully Responsive - Mobile-first design that works seamlessly on all devices and screen sizes
• Working Contact Form - Fully functional contact form with server-side validation and email delivery via Resend
• Dynamic Routing - Automatically generated project detail pages with static site generation
• SEO Optimized - Proper meta tags, OpenGraph images, and semantic HTML for search engines
• Type-Safe - 100% TypeScript coverage for better code quality and maintainability
• Production Ready - Optimized build process and deployment pipeline for Cloudflare Workers

This portfolio demonstrates proficiency in modern web development practices including React Server Components, API routes, form handling, email integration, and responsive design.`,
    image: '/images/projects/portfolio-1.png',
    images: [
      '/images/projects/portfolio-1.png',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Node.js',
      'Resend',
      'Cloudflare Workers',
    ],
    liveUrl: '',
    githubUrl: '',
    featured: true,
    order: 1,
    date: '2025-01',
    category: 'Web Development',
  },
]

/**
 * Utility Functions
 */

// Get all projects
export function getAllProjects(): Project[] {
  return projects.sort((a, b) => a.order - b.order)
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order)
}

// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Get all project slugs (for static generation)
export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}

// Get projects by category
export function getProjectsByCategory(category: string): Project[] {
  return projects
    .filter((p) => p.category === category)
    .sort((a, b) => a.order - b.order)
}
