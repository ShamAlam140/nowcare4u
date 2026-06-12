import type { Metadata } from "next"
import Mentalheath from "@/components/home/_mentalHealthprogram/mentalheath"
import Sickreason from "@/components/home/_mentalHealthprogram/sickreason"
import Mentallwellness from "@/components/home/_mentalHealthprogram/mentallwellness"
import Systemmatic from "@/components/home/_mentalHealthprogram/systemmatic-procedure"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Mental Health Programs - Comprehensive Mental Wellness",
  description: "Explore NowCare4U's mental health programs including wellness assessments, treatment plans, and professional support for mental well-being.",
  keywords: ["mental health", "wellness", "psychiatry", "psychology", "mental wellness", "therapy", "mental health programs"],
  alternates: {
    canonical: "/mental-health",
  },
  openGraph: {
    title: "Mental Health Programs | NowCare4U",
    description: "Explore NowCare4U's mental health programs including wellness assessments, treatment plans, and professional support for mental well-being.",
    type: "website",
    url: "https://nowcare4u.com/mental-health",
    images: [{ url: "/images/mental-health-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Health Programs | NowCare4U",
    description: "Explore comprehensive mental health programs and professional support.",
    images: ["/images/mental-health-twitter.jpg"],
  },
}

export default function MentalHealthPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Mental Health Programs",
    "description": "Explore NowCare4U's mental health programs including wellness assessments, treatment plans, and professional support.",
    "url": "https://nowcare4u.com/mental-health",
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Psychiatry"
    }
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Mentalheath />
      <Sickreason />
      <Mentallwellness />
      <Systemmatic />
    </>
  )
}
