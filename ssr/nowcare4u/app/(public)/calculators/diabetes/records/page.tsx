import type { Metadata } from "next"
import { Suspense } from "react"
import DiabetesRecords from "@/components/home/_calculator/diabetes/DiabetesRecords"
export const metadata: Metadata = { title: "Diabetes Records - NowCare4U" }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><DiabetesRecords /></Suspense> }
