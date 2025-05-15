import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{name}</h3>
          <span className="text-xs text-muted-foreground">{level}%</span>
        </div>
        <Progress value={level} className="h-2" />
      </CardContent>
    </Card>
  )
}
