import { Suspense } from "react"
import type { Metadata } from "next"
import PregnancyWeightApp from "@/components/home/_calculator/pregnancyWeight/PregnancyWeightApp"
export const metadata: Metadata = { title: "Pregnancy Weight Gain Calculator", description: "Track recommended weight gain range during pregnancy." }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><PregnancyWeightApp /></Suspense> }
