/**
 * Contact Page
 *
 * Contact form page with:
 * - Contact form component
 * - Contact information
 * - Social links
 */

import { Metadata } from 'next'
import FadeIn from '@/components/animations/FadeIn'
import ContactForm from '@/components/sections/ContactForm'
import Card from '@/components/ui/Card'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, } from 'react-icons/fi'
import { SiIndeed } from 'react-icons/si'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with me for project inquiries, collaborations, or just to say hello.',
}

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/trewenger',
    icon: FiGithub,
    color: 'hover:bg-accent'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tre-wenger-618314398',
    icon: FiLinkedin,
    color: 'hover:bg-accent'
  },
  {
    name: 'Indeed',
    url: 'https://profile.indeed.com/p/qczsl06',
    icon: SiIndeed,
    color: 'hover:bg-accent'
  },
  {
    name: 'Email',
    url: '/contact',
    icon: FiMail,
    color: 'hover:bg-accent'
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Get In <span className="text-gradient">Touch</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-foreground-secondary text-center max-w-3xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
              Fill out the form below or reach out through any of the channels listed,
              I'm always open to discussing new opportunities and ideas.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <FadeIn delay={0.2}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Connect With Me
                </h2>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-background-tertiary border border-border transition-all ${social.color}`}
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    )
                  })}
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">

              <FadeIn delay={0.3}>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send Me a Message
              </h2>
                <Card>
                  <ContactForm />
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
