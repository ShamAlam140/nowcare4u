import type { Metadata } from "next"
import ContactUs from "@/components/home/ContactUs"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Healthcare Experts",
  description: "Contact NowCare4U for healthcare support, inquiries, or partnership opportunities. We're here 24/7 to assist you.",
  keywords: ["contact healthcare", "medical support", "NowCare4U contact", "healthcare inquiries"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | NowCare4U",
    description: "Contact NowCare4U for healthcare support, inquiries, or partnership opportunities. We're here 24/7 to assist you.",
    type: "website",
    url: "https://nowcare4u.com/contact",
    images: [{ url: "/images/contact-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | NowCare4U",
    description: "Contact NowCare4U for healthcare support and inquiries.",
    images: ["/images/contact-twitter.jpg"],
  },
}

export default function ContactPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "NowCare4U",
    "url": "https://nowcare4u.com",
    "logo": "https://nowcare4u.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English"]
    }
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <ContactUs />
    </>
  )
}
