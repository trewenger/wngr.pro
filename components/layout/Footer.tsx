/**
 * Footer Component
 *
 * Site footer with:
 * - Social links
 * - Copyright info
 * - Quick navigation
 *
 * To add social links, update the 'socialLinks' array below.
 */

import Link from 'next/link'
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiExternalLink,
} from 'react-icons/fi'
import { SiIndeed } from 'react-icons/si'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/trewenger',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tre-wenger-618314398',
    icon: FiLinkedin,
  },
  {
    name: 'Indeed',
    url: 'https://profile.indeed.com/p/qczsl06',
    icon: SiIndeed,
  },
  {
    name: 'Email',
    url: '/contact',
    icon: FiMail,
  },
]

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              <span className="text-gradient">Tre Wenger</span>
            </h3>
            <p className="text-sm text-foreground-secondary mb-4">
              Full Stack Developer passionate about creating beautiful and
              functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-foreground-secondary hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                    <FiExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="p-2 rounded-lg bg-background-tertiary hover:bg-accent hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <div></div>
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground-tertiary">
              © {currentYear} Tre Wenger. All rights reserved.
            </p>
            <p className="text-sm text-foreground-tertiary">
              Built with Next.js, TypeScript, React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
