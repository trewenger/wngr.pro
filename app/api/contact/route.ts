/**
 * Contact API Route
 *
 * Handles contact form submissions via the Resend email API.
 * Runs on Cloudflare's edge runtime (no Node.js native modules).
 *
 * Environment Variables Required:
 * - RESEND_API_KEY: API key from resend.com
 * - CONTACT_EMAIL: Email address to receive contact form submissions
 */

import { NextRequest, NextResponse } from 'next/server'
import type { ContactFormData, ContactFormResponse } from '@/types/contact'

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

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

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Honeypot check (spam prevention — return fake success to fool bots)
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json<ContactFormResponse>({
        success: true,
        message: 'Message sent successfully',
      })
    }

    // Server-side validation
    const validationError = validateFormData(data)
    if (validationError) {
      return NextResponse.json<ContactFormResponse>(
        { success: false, message: validationError },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable')
      return NextResponse.json<ContactFormResponse>(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      )
    }

    const toEmail = process.env.CONTACT_EMAIL || 'trewenger@gmail.com'

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@wngr.dev',
        to: toEmail,
        subject: `Portfolio Contact: ${data.subject}`,
        reply_to: data.email,
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
      }),
    })

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text()
      console.error('Resend API error:', resendError)
      return NextResponse.json<ContactFormResponse>(
        { success: false, message: 'Failed to send message. Please try again later.', error: resendError },
        { status: 500 }
      )
    }

    return NextResponse.json<ContactFormResponse>({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json<ContactFormResponse>(
      {
        success: false,
        message: 'Failed to send message. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
