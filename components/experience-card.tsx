import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}

export function ExperienceCard({ title, company, location, period, description, skills }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-primary font-medium">{company}</p>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>{location}</p>
            <p>{period}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2 text-muted-foreground">
          {description.map((item, index) => (
            <li key={index} className="list-disc ml-5">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
