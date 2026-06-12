import { Suspense } from "react"
import type { Metadata } from "next"
import CognitiveTestApp from "@/components/home/_calculator/congnitiveTest/CognitiveTestApp"
export const metadata: Metadata = { title: "Cognitive Test", description: "Assess your cognitive skills, attention, and memory." }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><CognitiveTestApp /></Suspense> }
