/**
 * Project Type Definition
 *
 * This interface defines the structure for project data.
 * Used throughout the app for type safety.
 */

export interface Project {
  // URL-friendly identifier (used in /projects/[slug])
  slug: string

  // Project title
  title: string

  // Short description for project cards
  description: string

  // Full project details for the project page
  longDescription: string

  // Main thumbnail image
  image: string

  // Additional images for project gallery
  images: string[]

  // Array of technologies used (e.g., ['React', 'TypeScript', 'Node.js'])
  technologies: string[]

  // Optional: Live demo URL
  liveUrl?: string

  // Optional: GitHub repository URL
  githubUrl?: string

  // Whether to feature on homepage
  featured: boolean

  // Display order (lower numbers appear first)
  order: number

  // Project completion/creation date
  date: string

  // Optional: Category or type of project
  category?: string
}
