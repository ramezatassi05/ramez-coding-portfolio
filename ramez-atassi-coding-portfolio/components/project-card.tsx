import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <div className="w-full h-48 flex items-center justify-center bg-white">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className={`transition-transform duration-500 group-hover:scale-105 ${
              image.includes("credit-card-fraud") ||
              image.includes("spam-email-detector") ||
              image.includes("barbershop-booking")
                ? "h-40 w-auto object-contain"
                : "w-full h-full object-cover"
            }`}
          />
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
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
