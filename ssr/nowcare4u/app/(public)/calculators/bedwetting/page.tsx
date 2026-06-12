import { Suspense } from "react"
import type { Metadata } from "next"
import BedwettingTest from "@/components/home/_calculator/bedwettingTest"
export const metadata: Metadata = { title: "Bedwetting Calculator", description: "Assess bed-wetting patterns and potential causes." }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><BedwettingTest /></Suspense> }
