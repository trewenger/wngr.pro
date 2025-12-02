'use client'

/**
 * BackButton Component
 *
 * A button that navigates back to the previous page using browser history.
 * Better UX than hardcoding a specific route.
 */

import { useRouter } from 'next/navigation'
import Button from './Button'
import { FiArrowLeft } from 'react-icons/fi'

export default function BackButton() {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      icon={<FiArrowLeft />}
      onClick={() => router.back()}
    >
      Back
    </Button>
  )
}
