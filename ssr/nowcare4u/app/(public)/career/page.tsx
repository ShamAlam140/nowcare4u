import type { Metadata } from "next"
import Career from "@/components/home/Career"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Join Our Team | Healthcare Careers at NowCare4U",
  description: "Join NowCare4U's innovative healthcare team. We're hiring talented professionals including developers, designers, and healthcare specialists.",
  keywords: ["healthcare careers", "medical jobs", "healthcare technology careers", "nowcare4u jobs"],
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Join Our Team | Healthcare Careers at NowCare4U",
    description: "Join NowCare4U's innovative healthcare team. We're hiring talented professionals including developers, designers, and healthcare specialists.",
    type: "website",
    url: "https://nowcare4u.com/career",
    images: [{ url: "/images/career-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Team | NowCare4U Careers",
    description: "Join our innovative healthcare team.",
    images: ["/images/career-twitter.jpg"],
  },
}

export default function CareerPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at NowCare4U",
    "description": "Join NowCare4U's innovative healthcare team. We're hiring talented professionals.",
    "url": "https://nowcare4u.com/career"
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Career />
    </>
  )
}
