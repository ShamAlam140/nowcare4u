import type { Metadata } from "next"
import ExpertList from "@/components/home/ExpertList"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Expert Doctors - Find & Book Healthcare Professionals",
  description: "Find and book appointments with expert doctors across various specialties. NowCare4U connects you with qualified healthcare professionals.",
  keywords: ["expert doctors", "find a doctor", "book appointment", "healthcare professionals", "specialists"],
  alternates: {
    canonical: "/experts",
  },
  openGraph: {
    title: "Expert Doctors - NowCare4U",
    description: "Connect with qualified healthcare professionals for personalized medical care",
    type: "website",
    url: "https://nowcare4u.com/experts",
    images: [{ url: "/images/experts-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Doctors | NowCare4U",
    description: "Find and book appointments with expert doctors.",
    images: ["/images/experts-twitter.jpg"],
  },
}

export default function ExpertsPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Expert Doctors Directory",
    "description": "Find and book appointments with expert doctors across various specialties.",
    "url": "https://nowcare4u.com/experts"
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <ExpertList />
    </>
  )
}
