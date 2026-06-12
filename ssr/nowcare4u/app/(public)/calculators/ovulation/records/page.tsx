import type { Metadata } from "next"
import { Suspense } from "react"
import OvulationRecord from "@/components/home/_calculator/ovulation/OvulationRecord"
export const metadata: Metadata = { title: "Ovulation Records - NowCare4U" }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><OvulationRecord /></Suspense> }
