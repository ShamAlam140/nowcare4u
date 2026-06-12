import type { Metadata } from "next"
import Hero from "@/components/home/Hero"
import Expert from "@/components/home/Expert"
import Calculator from "@/components/home/Calculator"
import Career from "@/components/home/Career"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "NowCare4U | Next-Generation Healthcare Platform | AI-Powered Medical Solutions",
  description:
    "Revolutionary healthcare platform featuring AI-powered EHR systems, telemedicine, personalized wellness insights, and 24/7 medical support.",
  keywords: [
    "healthcare",
    "telemedicine",
    "EHR",
    "AI medical",
    "digital health",
    "wellness",
    "medical consultation",
    "health records",
    "healthcare technology",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NowCare4U | Next-Generation Healthcare Platform",
    description:
      "Experience the future of healthcare with AI-powered medical solutions, smart EHR systems, and 24/7 professional support.",
    type: "website",
    url: "https://nowcare4u.com",
    images: [
      {
        url: "/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "NowCare4U Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NowCare4U | AI-Powered Healthcare Solutions",
    description:
      "Revolutionary healthcare platform with smart EHR, telemedicine, and instant medical support.",
    images: ["/images/home-twitter.jpg"],
  },
}

export default function HomePage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": "https://nowcare4u.com",
        "name": "NowCare4U",
        "description": "Next-Generation Healthcare Platform",
      },
      {
        "@type": "MedicalOrganization",
        "name": "NowCare4U",
        "url": "https://nowcare4u.com",
        "logo": "https://nowcare4u.com/logo.png",
        "description": "Comprehensive AI-powered healthcare platform.",
      }
    ]
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Hero />
      <Expert />
      <Calculator />
      <Career />
    </>
  )
}
