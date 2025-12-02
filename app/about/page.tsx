/**
 * About Page
 *
 * Personal information page with:
 * - Bio/introduction
 * - Skills showcase
 * - Experience/timeline (optional)
 *
 * Customize the content below to tell your story.
 */

import { Metadata } from 'next'
import FadeIn from '@/components/animations/FadeIn'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { CiLink } from "react-icons/ci";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiGitBranch,
  FiServer,
  FiSmartphone,
} from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about my background, skills, and experience as a full-stack developer.',
}

const skills = [
  {
    category: 'Languages',
    icon: FiCode,
    technologies: [
      'JavaScript', 
      'TypeScript', 
      'Python', 
      'SQL/MySQL',
      'HTML',
      'CSS'
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: FiGitBranch,
    technologies: [
      'Git', 
      'Docker', 
      'AWS', 
      'Netlify', 
      'CloudFlare',
      'PostMan'
    ],
  },
  {
    category: 'Frontend',
    icon: FiLayout,
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'CSS',
      'HTML',
      'Jinja'
    ],
  },
  {
    category: 'Backend',
    icon: FiServer,
    technologies: [
      'Node.js', 
      'PostgreSQL', 
      'SQL & MySQL',
      'Flask'
    ],
  },

]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
               <span className="text-gradient">About</span> Me
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-foreground-secondary text-center max-w-3xl mx-auto">
              Code, Creativity, and Problem-Solving - End to End
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Card>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Hi, I'm Tre
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    I’m a Systems Engineer and aspiring full-stack developer who believes technology should make 
                    life simpler, smarter, and more human. As I work toward completing my computer science degree in 2027, 
                    I’ve been applying modern engineering practices directly in real-world environments—building automations, 
                    cloud systems, and AI-powered integrations that genuinely help people.
                  </p>
                  <p>
                    I’m a musician at heart and someone who values creativity, precision, and intention in everything I do. Whether 
                    I’m designing a system or playing the guitar, I take pride in the craft and always push for the best possible result.
                  </p>
                  <p>
                    My long-term mission is to leverage cutting-edge technologies to solve meaningful problems and improve quality 
                    of life at scale—one thoughtful, well-built solution at a time.
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Skills & Technologies
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-foreground-secondary">
                Tools, languages & frameworks I work with currently
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <FadeIn key={skill.category} delay={index * 0.1} direction="up">
                  <Card hover className="h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {skill.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="text-sm text-foreground-secondary flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section (Optional - customize or remove) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Recent Experience
              </h2>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <Card>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      Systems Engineer
                    </h3>
                    <span className="text-sm text-foreground-tertiary">
                      July 2023 - Present
                    </span>
                  </div>
                  <p className="text-accent font-medium mb-2">
                    Radian Weapons
                  </p>
                  <ul className="space-y-3">
                    <li className="text-foreground-secondary flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Designing, building, and implementing of various complex and long term systems, tools, and applications.</span>
                    </li>
                    <li className="text-foreground-secondary flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Translation of strategic and operational needs into reliable and effective solutions, often preparing for events years into the future.</span>
                    </li>
                    <li className="text-foreground-secondary flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Management and coordination of company IT resources, security, and technical teams.</span>
                    </li>
                    <li className="text-foreground-secondary flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Systems administration for enterprise systems and management.</span>
                    </li>
                    <li className="text-foreground-secondary flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Business intelligence and data analysis support.</span>
                    </li>
                    <li className="text-foreground-secondary flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Systems documentation and technical writing.</span>
                    </li>
                    <li className="text-foreground-secondary flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Manufacturing systems role/background, with training in Demand Driven MRP, Six Sigma, ToC, and Critical Chain PM.</span>
                    </li>
                    <li className="text-foreground-secondary flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Creation of various production systems such as part and product numbering, automated live/dynamic inventory counting, BOMs, CMS and more.</span>
                    </li>
                  </ul>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      Information Systems Coordinator
                    </h3>
                    <span className="text-sm text-foreground-tertiary">
                      July 2021 - July 2023
                    </span>
                  </div>
                  <p className="text-accent font-medium mb-2">
                    Radian Weapons
                  </p>
                  <ul className="space-y-2">
                    <li className="text-foreground-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Coordination of various IT teams, IT problems, and hardware allocation.</li>
                    <li className="text-foreground-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Spreadsheet tool creation and SME.</li>
                    <li className="text-foreground-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Data governance, cleanup, and reporting.</li>
                    <li className="text-foreground-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      SOP creation for enterprise systems.</li>
                    <li className="text-foreground-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Small team management for enterprise app integrations and build outs.</li>
                    <li className="text-foreground-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      General technical support, SME, and technical resource.</li>
                  </ul>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <a href="/Resume.pdf" className="flex justify-center" download="Resume.pdf">
                  <Button variant="primary" size="md" icon={<CiLink className="w-8 h-8"/>}>
                    Download My Full Resume
                  </Button>
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
