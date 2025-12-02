/**
 * Netlify Function: Contact Form Handler
 *
 * This serverless function handles contact form submissions.
 *
 * Features:
 * - Email sending via Nodemailer (Gmail)
 * - Server-side validation
 * - Honeypot spam prevention
 * - Error handling
 *
 * Environment Variables Required:
 * - GMAIL_USER: Your Gmail address
 * - GMAIL_APP_PASSWORD: Gmail app password (not your regular password!)
 * - CONTACT_EMAIL: Email address to receive messages
 *
 * Setup Gmail App Password:
 * 1. Enable 2-factor authentication on your Google account
 * 2. Go to https://myaccount.google.com/apppasswords
 * 3. Generate a new app password for "Mail"
 * 4. Use that password in GMAIL_APP_PASSWORD
 */

import { Handler, HandlerEvent } from '@netlify/functions'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  website?: string // Honeypot field
}

interface ContactFormResponse {
  success: boolean
  message: string
  error?: string
}

// Validate email format
function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Validate form data
function validateFormData(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length === 0) {
    return 'Name is required'
  }

  if (!data.email || !isValidEmail(data.email)) {
    return 'Valid email is required'
  }

  if (!data.subject || data.subject.trim().length === 0) {
    return 'Subject is required'
  }

  if (!data.message || data.message.trim().length < 10) {
    return 'Message must be at least 10 characters'
  }

  return null
}

export const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({
        success: false,
        message: 'Method not allowed',
      } as ContactFormResponse),
    }
  }

  try {
    // Parse request body
    const data: ContactFormData = JSON.parse(event.body || '{}')

    // Check honeypot field (spam prevention)
    if (data.website && data.website.trim().length > 0) {
      console.log('Spam detected via honeypot field')
      // Return success to fool bots
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'Message sent successfully',
        } as ContactFormResponse),
      }
    }

    // Validate form data
    const validationError = validateFormData(data)
    if (validationError) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: validationError,
        } as ContactFormResponse),
      }
    }

    // Check required environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration')
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: 'Email service not configured',
        } as ContactFormResponse),
      }
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email to you (notification)
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `Portfolio Contact: ${data.subject}`,
      replyTo: data.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4fc1ff; border-bottom: 2px solid #4fc1ff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${data.subject}</p>
          </div>

          <div style="background: #fff; padding: 20px; border-left: 4px solid #4fc1ff; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; color: #666; line-height: 1.6;">${data.message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${data.name}.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Reply directly to this email to respond to ${data.name}.
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    console.log('Contact form email sent successfully')

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      } as ContactFormResponse),
    }
  } catch (error) {
    console.error('Error sending email:', error)

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        message: 'Failed to send message. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error',
      } as ContactFormResponse),
    }
  }
}
