import { Suspense } from "react"
import type { Metadata } from "next"
import Calculator from "@/components/home/Calculator"
import JsonLd from "@/components/seo/JsonLd"
import Breadcrumbs from "@/components/seo/Breadcrumbs"

export const metadata: Metadata = {
  title: "Health Calculators & Medical Tools | Pregnancy, BMI, Diabetes Risk",
  description: "Free online health calculators including pregnancy calculator, ovulation tracker, BMI calculator, diabetes risk assessment, ADHD test, and more.",
  keywords: ["health calculators", "pregnancy calculator", "ovulation calculator", "BMI calculator", "diabetes risk", "ADHD test", "medical tools"],
  alternates: {
    canonical: "/calculators",
  },
  openGraph: {
    title: "Health Calculators & Medical Tools | NowCare4U",
    description: "Free online health calculators including pregnancy calculator, ovulation tracker, BMI calculator, diabetes risk assessment, ADHD test, and more.",
    type: "website",
    url: "https://nowcare4u.com/calculators",
    images: [{ url: "/images/calculators-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Calculators & Medical Tools | NowCare4U",
    description: "Access free online health calculators and medical tools.",
    images: ["/images/calculators-twitter.jpg"],
  },
}

export default function CalculatorsPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Health Calculators & Medical Tools",
    "description": "Free online health calculators including pregnancy, ovulation, BMI, diabetes risk, and ADHD.",
    "url": "https://nowcare4u.com/calculators"
  };

  const breadcrumbItems = [
    { label: "Calculators", href: "/calculators" }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <JsonLd data={jsonLdData} />
      <Breadcrumbs items={breadcrumbItems} />
      <Suspense fallback={<div>Loading...</div>}>
        <Calculator />
      </Suspense>
    </main>
  )
}
