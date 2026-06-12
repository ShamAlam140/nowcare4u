import type { Metadata } from "next"
import ProgramPage from "@/components/home/ProgramPage"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Healthcare Programs - Specialized Treatment Programs",
  description: "Explore NowCare4U's specialized healthcare programs designed for comprehensive treatment and wellness.",
  keywords: ["healthcare programs", "specialized treatment", "wellness programs", "medical plans"],
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "Healthcare Programs | NowCare4U",
    description: "Explore NowCare4U's specialized healthcare programs designed for comprehensive treatment and wellness.",
    type: "website",
    url: "https://nowcare4u.com/programs",
    images: [{ url: "/images/programs-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Programs | NowCare4U",
    description: "Explore specialized healthcare programs and comprehensive treatment plans.",
    images: ["/images/programs-twitter.jpg"],
  },
}

export default function ProgramsPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Healthcare Programs",
    "description": "Explore NowCare4U's specialized healthcare programs designed for comprehensive treatment and wellness.",
    "url": "https://nowcare4u.com/programs"
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <ProgramPage />
    </>
  )
}
