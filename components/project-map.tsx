"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Home, Building2, Paintbrush, CheckCircle2 } from "lucide-react"

// Project data by neighborhood - representing 500+ completed projects
const projectsByArea = {
  "Katy": {
    count: 87,
    projects: [
      { type: "Interior", neighborhood: "Cinco Ranch", year: 2024 },
      { type: "Exterior", neighborhood: "Seven Meadows", year: 2024 },
      { type: "Cabinet", neighborhood: "Firethorne", year: 2024 },
      { type: "Interior", neighborhood: "Elyson", year: 2023 },
      { type: "Exterior", neighborhood: "Grand Lakes", year: 2023 },
    ]
  },
  "Cypress": {
    count: 72,
    projects: [
      { type: "Exterior", neighborhood: "Bridgeland", year: 2024 },
      { type: "Interior", neighborhood: "Towne Lake", year: 2024 },
      { type: "Cabinet", neighborhood: "Cy-Fair", year: 2023 },
      { type: "Interior", neighborhood: "Lakeland Heights", year: 2023 },
    ]
  },
  "Sugar Land": {
    count: 65,
    projects: [
      { type: "Exterior", neighborhood: "First Colony", year: 2024 },
      { type: "Interior", neighborhood: "Riverstone", year: 2024 },
      { type: "Cabinet", neighborhood: "New Territory", year: 2023 },
      { type: "Interior", neighborhood: "Greatwood", year: 2023 },
    ]
  },
  "The Woodlands": {
    count: 58,
    projects: [
      { type: "Interior", neighborhood: "Creekside Park", year: 2024 },
      { type: "Exterior", neighborhood: "Sterling Ridge", year: 2024 },
      { type: "Cabinet", neighborhood: "Alden Bridge", year: 2023 },
    ]
  },
  "Houston - Memorial": {
    count: 45,
    projects: [
      { type: "Exterior", neighborhood: "Memorial Villages", year: 2024 },
      { type: "Interior", neighborhood: "Piney Point", year: 2024 },
      { type: "Cabinet", neighborhood: "Bunker Hill", year: 2023 },
    ]
  },
  "Houston - Heights": {
    count: 42,
    projects: [
      { type: "Interior", neighborhood: "Houston Heights", year: 2024 },
      { type: "Exterior", neighborhood: "Woodland Heights", year: 2024 },
      { type: "Cabinet", neighborhood: "Norhill", year: 2023 },
    ]
  },
  "Houston - River Oaks": {
    count: 28,
    projects: [
      { type: "Exterior", neighborhood: "River Oaks", year: 2024 },
      { type: "Interior", neighborhood: "Tanglewood", year: 2024 },
    ]
  },
  "Bellaire": {
    count: 38,
    projects: [
      { type: "Exterior", neighborhood: "Bellaire Proper", year: 2024 },
      { type: "Interior", neighborhood: "Southdale", year: 2024 },
      { type: "Cabinet", neighborhood: "Maplewood", year: 2023 },
    ]
  },
  "Richmond / Fulshear": {
    count: 35,
    projects: [
      { type: "Interior", neighborhood: "Pecan Grove", year: 2024 },
      { type: "Exterior", neighborhood: "Cross Creek Ranch", year: 2024 },
      { type: "Cabinet", neighborhood: "Weston Lakes", year: 2023 },
    ]
  },
  "Pearland": {
    count: 32,
    projects: [
      { type: "Interior", neighborhood: "Silverlake", year: 2024 },
      { type: "Exterior", neighborhood: "Shadow Creek Ranch", year: 2024 },
    ]
  },
  "Magnolia / Tomball": {
    count: 28,
    projects: [
      { type: "Interior", neighborhood: "Woodforest", year: 2024 },
      { type: "Exterior", neighborhood: "Northpointe", year: 2024 },
    ]
  },
  "Spring": {
    count: 22,
    projects: [
      { type: "Interior", neighborhood: "Klein", year: 2024 },
      { type: "Exterior", neighborhood: "Champions", year: 2023 },
    ]
  },
}

const projectTypeColors: Record<string, string> = {
  "Interior": "bg-blue-100 text-blue-800",
  "Exterior": "bg-green-100 text-green-800",
  "Cabinet": "bg-amber-100 text-amber-800",
}

export function ProjectMap() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  
  const totalProjects = Object.values(projectsByArea).reduce((sum, area) => sum + area.count, 0)
  
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Our Work Across Houston</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {totalProjects}+ Projects Completed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our completed projects across Greater Houston. Click any area to see recent work in your neighborhood.
          </p>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">{totalProjects}+</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">{Object.keys(projectsByArea).length}</div>
              <div className="text-sm text-muted-foreground">Areas Served</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Year Warranty</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">4.9</div>
              <div className="text-sm text-muted-foreground">Star Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Area Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {Object.entries(projectsByArea).map(([area, data]) => (
            <Card 
              key={area}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedArea === area ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              onClick={() => setSelectedArea(selectedArea === area ? null : area)}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-foreground">{area}</span>
                  </div>
                  <Badge variant="outline">{data.count}</Badge>
                </div>
                <div className="flex flex-wrap gap-1">
                  {data.projects.slice(0, 3).map((project, idx) => (
                    <Badge key={idx} className={`text-xs ${projectTypeColors[project.type]}`}>
                      {project.type}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Area Details */}
        {selectedArea && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Recent Projects in {selectedArea}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectsByArea[selectedArea as keyof typeof projectsByArea].projects.map((project, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="flex-shrink-0">
                      {project.type === "Interior" && <Home className="h-5 w-5 text-blue-600" />}
                      {project.type === "Exterior" && <Building2 className="h-5 w-5 text-green-600" />}
                      {project.type === "Cabinet" && <Paintbrush className="h-5 w-5 text-amber-600" />}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{project.type} Painting</p>
                      <p className="text-sm text-muted-foreground">{project.neighborhood} • {project.year}</p>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-green-500 ml-auto" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Showing recent projects. {projectsByArea[selectedArea as keyof typeof projectsByArea].count} total projects completed in {selectedArea}.
              </p>
            </CardContent>
          </Card>
        )}

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Want to see your neighborhood on this map? We&apos;d love to add your project!
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Get Your Free Estimate</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
