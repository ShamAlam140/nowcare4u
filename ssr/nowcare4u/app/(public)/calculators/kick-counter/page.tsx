import { Suspense } from "react"
import type { Metadata } from "next"
import KickCounterApp from "@/components/home/_calculator/KickCounterApp"
export const metadata: Metadata = { title: "Baby Kick Counter", description: "Track fetal movements and baby\'s activity patterns." }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><KickCounterApp /></Suspense> }
