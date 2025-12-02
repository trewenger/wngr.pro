'use client'

/**
 * ThemeToggle Component
 *
 * Button to toggle between light and dark themes.
 * Displays sun/moon icon based on current theme.
 *
 * Usage:
 *   <ThemeToggle />
 */

import { useTheme } from '@/contexts/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-background-tertiary border border-border hover:bg-background-secondary transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <FiMoon className="w-5 h-5 text-accent" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
          rotate: theme === 'light' ? 0 : -180,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <FiSun className="w-5 h-5 text-accent" />
      </motion.div>
      {/* Invisible placeholder to maintain button size */}
      <div className="w-5 h-5 opacity-0">
        <FiSun />
      </div>
    </motion.button>
  )
}
