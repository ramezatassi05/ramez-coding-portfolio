import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageDebug } from "./image-debug"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  // Ensure image path is lowercase to avoid case sensitivity issues
  const imagePath = image.toLowerCase()

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <div className="w-full h-48 flex items-center justify-center bg-white">
          {/* Use a div with background image as fallback strategy */}
          <div
            className="w-full h-full bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${imagePath})` }}
          >
            {/* Add Next.js Image as primary strategy */}
            <Image
              src={imagePath || "/placeholder.svg"}
              alt={title}
              fill
              className={`transition-transform duration-500 group-hover:scale-105 ${
                imagePath.includes("credit-card-fraud") ||
                imagePath.includes("spam-email-detector") ||
                imagePath.includes("barbershop-booking")
                  ? "object-contain"
                  : "object-cover"
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
          <Link href={link} className="text-primary hover:underline flex items-center gap-1">
            View Project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        {/* Add debug component in development */}
        {process.env.NODE_ENV === "development" && <ImageDebug src={imagePath || "/placeholder.svg"} />}
      </CardFooter>
    </Card>
  )
}
