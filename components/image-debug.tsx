"use client"

import { useState, useEffect } from "react"

interface ImageDebugProps {
  src: string
}

export function ImageDebug({ src }: ImageDebugProps) {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [errorDetails, setErrorDetails] = useState<string>("")

  useEffect(() => {
    const img = new Image()
    img.onload = () => setStatus("success")
    img.onerror = (e) => {
      setStatus("error")
      setErrorDetails(JSON.stringify(e))
    }
    img.src = src
  }, [src])

  return (
    <div className="text-xs p-2 bg-muted rounded-md">
      <p>Image path: {src}</p>
      <p>Status: {status}</p>
      {status === "error" && <p>Error: {errorDetails}</p>}
    </div>
  )
}
