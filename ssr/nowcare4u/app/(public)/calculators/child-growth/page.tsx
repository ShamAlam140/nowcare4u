import { Suspense } from "react"
import type { Metadata } from "next"
import ChildgrowthTest from "@/components/home/_calculator/childgrowthTest"
export const metadata: Metadata = { title: "Child Growth Tracker", description: "Monitor your child\'s development and growth patterns." }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><ChildgrowthTest /></Suspense> }
