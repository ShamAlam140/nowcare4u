import type { Metadata } from "next"
import Ourservice from "@/components/home/Ourservice"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Our Services - Comprehensive Healthcare Solutions",
  description: "Explore NowCare4U's comprehensive healthcare services including telemedicine, diagnostics, and personalized treatment plans.",
  keywords: ["healthcare services", "telemedicine", "diagnostics", "medical services", "personalized treatment"],
  alternates: {
    canonical: "/ourservice",
  },
  openGraph: {
    title: "Our Services | NowCare4U",
    description: "Explore NowCare4U's comprehensive healthcare services including telemedicine, diagnostics, and personalized treatment plans.",
    type: "website",
    url: "https://nowcare4u.com/ourservice",
    images: [{ url: "/images/services-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | NowCare4U",
    description: "Explore comprehensive healthcare services, telemedicine, and personalized treatment plans.",
    images: ["/images/services-twitter.jpg"],
  },
}

export default function OurServicePage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Services",
    "description": "Explore NowCare4U's comprehensive healthcare services including telemedicine, diagnostics, and personalized treatment plans.",
    "url": "https://nowcare4u.com/ourservice"
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Ourservice />
    </>
  )
}
