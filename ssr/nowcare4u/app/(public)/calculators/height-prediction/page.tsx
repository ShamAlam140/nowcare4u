import { Suspense } from "react"
import type { Metadata } from "next"
import HeightPrediction from "@/components/home/_calculator/heightPredictionTest"
export const metadata: Metadata = { title: "Height Prediction Calculator", description: "Estimate your child\'s adult height based on current growth." }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><HeightPrediction /></Suspense> }
