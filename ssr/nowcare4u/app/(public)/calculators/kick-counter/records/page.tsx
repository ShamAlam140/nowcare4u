import type { Metadata } from "next"
import { Suspense } from "react"
import KickRecords from "@/components/home/_calculator/kick/KickRecords"
export const metadata: Metadata = { title: "Kick Records - NowCare4U" }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><KickRecords /></Suspense> }
