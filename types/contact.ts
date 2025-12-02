/**
 * Contact Form Type Definitions
 *
 * Used for type safety in contact form and API endpoint
 */

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  // Honeypot field for spam prevention (should remain empty)
  website?: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
  error?: string
}
