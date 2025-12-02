'use client'

/**
 * ContactForm Component
 *
 * Contact form with:
 * - Client-side validation
 * - Honeypot spam prevention
 * - Success/error feedback
 * - Loading states
 *
 * Submits to /api/contact which proxies to Netlify Function
 */

import { useState, FormEvent } from 'react'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { isValidEmail } from '@/lib/utils'
import type { ContactFormData, ContactFormResponse } from '@/types/contact'

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot field
  })

  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  // Validate form
  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Check honeypot (spam prevention)
    if (formData.website) {
      console.log('Spam detected')
      return
    }

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data: ContactFormResponse = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus('success')
        setSubmitMessage(
          data.message || 'Thank you for your message! I will get back to you soon.'
        )
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          website: '',
        })
        setErrors({})
      } else {
        setSubmitStatus('error')
        setSubmitMessage(
          data.message || 'Something went wrong. Please try again later.'
        )
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage(
        'Failed to send message. Please check your connection and try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name */}
      <Input
        label="Name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={errors.name}
        placeholder="John Doe"
        required
      />

      {/* Email */}
      <Input
        label="Your Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
        placeholder="john@example.com"
        required
      />

      {/* Subject */}
      <Input
        label="Subject"
        type="text"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        error={errors.subject}
        placeholder="High Level Summary"
        required
      />

      {/* Message */}
      <Textarea
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        error={errors.message}
        placeholder="What do you want to talk about?"
        rows={6}
        required
      />

      {/* Honeypot field (hidden from users) */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
        icon={<FiSend />}
      >
        Send Message
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-3">
          <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <p className="text-green-500 text-sm">{submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3">
          <FiAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-500 text-sm">{submitMessage}</p>
        </div>
      )}
    </form>
  )
}
