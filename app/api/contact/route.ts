/**
 * Contact API Route
 *
 * This API route proxies contact form submissions to the Netlify Function.
 * When deployed on Netlify, this will be handled by the Netlify Function directly.
 *
 * For local development, you can use Netlify CLI: `netlify dev`
 */

import { NextRequest, NextResponse } from 'next/server'
import type { ContactFormData, ContactFormResponse } from '@/types/contact'

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // In production on Netlify, redirect to the Netlify Function
    // For now, we'll call it directly
    const functionUrl =
      process.env.NODE_ENV === 'production'
        ? '/.netlify/functions/contact'
        : 'http://localhost:8888/.netlify/functions/contact'

    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data: ContactFormResponse = await response.json()

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process contact form submission',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
