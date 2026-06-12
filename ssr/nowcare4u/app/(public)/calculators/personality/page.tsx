import { Suspense } from "react"
import type { Metadata } from "next"
import PersonalityTest from "@/components/home/_calculator/personalityTest"
export const metadata: Metadata = { title: "Personality Test", description: "Discover your child\'s personality traits and tendencies." }
export default function Page() { return <Suspense fallback={<div>Loading...</div>}><PersonalityTest /></Suspense> }
