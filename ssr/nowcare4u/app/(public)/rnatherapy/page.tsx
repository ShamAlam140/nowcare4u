import type { Metadata } from "next"
import Rnatherapy from "@/components/home/Rnatherapy"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "RNA-Based Cancer Therapy Research - Genetics Innovation",
  description: "Explore cutting-edge RNA-based cancer treatment research and genetic therapy innovations at NowCare4U.",
  keywords: ["RNA therapy", "cancer treatment", "genetics", "gene therapy", "cancer research", "medical genetics"],
  alternates: {
    canonical: "/rnatherapy",
  },
  openGraph: {
    title: "RNA Therapy Research | NowCare4U",
    description: "Explore cutting-edge RNA-based cancer treatment research and genetic therapy innovations at NowCare4U.",
    type: "website",
    url: "https://nowcare4u.com/rnatherapy",
    images: [{ url: "/images/rnatherapy-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RNA Therapy Research | NowCare4U",
    description: "Explore cutting-edge RNA-based cancer treatment and genetics innovation.",
    images: ["/images/rnatherapy-twitter.jpg"],
  },
}

export default function RnatherapyPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "RNA-Based Cancer Therapy Research",
    "description": "Explore cutting-edge RNA-based cancer treatment research and genetic therapy innovations at NowCare4U.",
    "url": "https://nowcare4u.com/rnatherapy",
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Genetic"
    }
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Rnatherapy />
    </>
  )
}
