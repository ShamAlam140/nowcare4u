import { Suspense } from "react"
import type { Metadata } from "next"
import PhoneLogin from "@/components/home/PhoneLogin"

export const metadata: Metadata = {
  title: "Login - Access Your Health Records",
  description: "Login to NowCare4U to access your health records, appointments, and personalized healthcare services.",
}

export default function LoginPage() {
  return <Suspense fallback={<div>Loading...</div>}><PhoneLogin /></Suspense>
}
