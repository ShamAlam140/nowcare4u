import { Suspense } from "react"
import type { Metadata } from "next"
import BMICalcApp from "@/components/home/_calculator/bmi/BMICalcApp"
import JsonLd from "@/components/seo/JsonLd"
import Breadcrumbs from "@/components/seo/Breadcrumbs"

export const metadata: Metadata = {
  title: "BMI Calculator - Check Your Body Mass Index",
  description: "Calculate your body mass index and get personalized health recommendations.",
  keywords: ["BMI calculator", "body mass index", "health calculator", "weight tracking"],
  alternates: {
    canonical: "/calculators/bmi",
  },
  openGraph: {
    title: "BMI Calculator | NowCare4U",
    description: "Calculate your body mass index and get health recommendations.",
    type: "website",
    url: "https://nowcare4u.com/calculators/bmi",
    images: [{ url: "/images/bmi-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator | NowCare4U",
    description: "Calculate your body mass index and get health recommendations.",
    images: ["/images/bmi-twitter.jpg"],
  },
}

export default function Page() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BMI Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "description": "Calculate your body mass index and get personalized health recommendations.",
    "url": "https://nowcare4u.com/calculators/bmi",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "NowCare4U"
    }
  };

  const breadcrumbItems = [
    { label: "Calculators", href: "/calculators" },
    { label: "BMI Calculator", href: "/calculators/bmi" }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <JsonLd data={jsonLdData} />
      <Breadcrumbs items={breadcrumbItems} />
      <Suspense fallback={<div>Loading...</div>}>
        <BMICalcApp />
      </Suspense>
    </main>
  )
}
