import { Suspense } from "react"
import type { Metadata } from "next"
import OvulationCalculator from "@/components/home/_calculator/ovulation/OvulationCalculator"
export const metadata: Metadata = { title: "Ovulation Calculator", description: "Track your fertile window and optimize conception timing." }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><OvulationCalculator /></Suspense> }
