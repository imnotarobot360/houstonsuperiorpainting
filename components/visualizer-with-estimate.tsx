"use client"

import { useState } from "react"
import { ColorVisualizer } from "@/components/color-visualizer"
import { QuickEstimateForm } from "@/components/quick-estimate-form"

/** The visualizer plus the quick estimate form, which sends the chosen color name. */
export function VisualizerWithEstimate() {
  const [colorLabel, setColorLabel] = useState("")
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
      <ColorVisualizer onColorChange={setColorLabel} />
      <div className="lg:sticky lg:top-24">
        <QuickEstimateForm
          location="color_visualizer"
          heading="Like it? Get a free estimate"
          defaultProjectType="Color Consultation"
          colorName={colorLabel}
        />
        <p className="mt-3 text-xs text-muted-foreground">
          The color you selected ({colorLabel || "none yet"}) is sent with your request. Your photo is not sent; you can
          choose to attach it in the next step.
        </p>
      </div>
    </div>
  )
}
