import type { Metadata } from "next"
import { Suspense } from "react"
import CognitiveRecords from "@/components/home/_calculator/congnitiveTest/CognitiveRecords"
export const metadata: Metadata = { title: "Cognitive Records - NowCare4U" }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><CognitiveRecords /></Suspense> }
