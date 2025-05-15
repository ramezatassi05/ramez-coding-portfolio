"use client"

import { useEffect, useState } from "react"

const imagePaths = [
  "/images/profile-photo.png",
  "/images/raven-ai-project.png",
  "/images/credit-card-fraud.png",
  "/images/spam-email-detector.png",
  "/images/barbershop-booking.png",
]

export default function VerifyImages() {
  const [results, setResults] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const checkImages = async () => {
      const checks = {} as Record<string, boolean>

      for (const path of imagePaths) {
        try {
          const img = new Image()
          img.src = path

          await new Promise((resolve, reject) => {
            img.onload = resolve
            img.onerror = reject
          })

          checks[path] = true
        } catch (e) {
          checks[path] = false
        }
      }

      setResults(checks)
    }

    checkImages()
  }, [])

  return (
    <div className="p-4 bg-muted rounded-lg">
      <h2 className="text-lg font-bold mb-4">Image Verification</h2>
      <ul className="space-y-2">
        {Object.entries(results).map(([path, exists]) => (
          <li key={path} className="flex items-center gap-2">
            <span className={exists ? "text-green-500" : "text-red-500"}>{exists ? "✓" : "✗"}</span>
            <span>{path}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
