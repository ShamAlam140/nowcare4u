import { Suspense } from "react"
import type { Metadata } from "next"
import AdhdTest from "@/components/home/_calculator/adhdTest"
export const metadata: Metadata = { title: "ADHD Test - Screening Assessment", description: "Free ADHD screening test for attention deficit hyperactivity disorder assessment." }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><AdhdTest /></Suspense> }
