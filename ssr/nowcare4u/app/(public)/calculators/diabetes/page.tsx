import { Suspense } from "react"
import type { Metadata } from "next"
import DiabetesCalcApp from "@/components/home/_calculator/diabetes/DiabetesCalcApp"
export const metadata: Metadata = { title: "Diabetes Risk Calculator", description: "Assess your risk factors for type 2 diabetes." }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><DiabetesCalcApp /></Suspense> }
