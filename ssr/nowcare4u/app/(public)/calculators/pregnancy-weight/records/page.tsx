import type { Metadata } from "next"
import { Suspense } from "react"
import PregnancyWeightRecords from "@/components/home/_calculator/pregnancyWeight/PregnancyWeightRecords"
export const metadata: Metadata = { title: "Pregnancy Weight Records - NowCare4U" }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><PregnancyWeightRecords /></Suspense> }
