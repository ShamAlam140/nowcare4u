import type { Metadata } from "next"
import Neurology from "@/components/home/Neurology"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Neurology Research - Brain Electrode Detection & Innovation",
  description: "Discover NowCare4U's neurology research including electrode-based brain detection and neurological innovations.",
  keywords: ["neurology", "brain research", "electrode detection", "neurological innovation", "neuroscience"],
  alternates: {
    canonical: "/neurology",
  },
  openGraph: {
    title: "Neurology Research | NowCare4U",
    description: "Discover NowCare4U's neurology research including electrode-based brain detection and neurological innovations.",
    type: "website",
    url: "https://nowcare4u.com/neurology",
    images: [{ url: "/images/neurology-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurology Research | NowCare4U",
    description: "Discover cutting-edge neurology research and brain electrode detection.",
    images: ["/images/neurology-twitter.jpg"],
  },
}

export default function NeurologyPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Neurology Research",
    "description": "Discover NowCare4U's neurology research including electrode-based brain detection and neurological innovations.",
    "url": "https://nowcare4u.com/neurology",
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Neurologic"
    }
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Neurology />
    </>
  )
}
