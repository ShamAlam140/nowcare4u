import type { Metadata } from "next"
import Blog from "@/components/home/blog/blog"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Health Blog - Medical Insights & Wellness Articles",
  description: "Read the latest health articles, medical insights, and wellness tips from NowCare4U healthcare experts.",
  keywords: ["health blog", "medical articles", "wellness tips", "healthcare insights", "medical news"],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Health Blog - Medical Insights & Wellness Articles | NowCare4U",
    description: "Read the latest health articles, medical insights, and wellness tips from NowCare4U healthcare experts.",
    type: "website",
    url: "https://nowcare4u.com/blog",
    images: [{ url: "/images/blog-og.jpg", width: 1200, height: 630, alt: "NowCare4U Health Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Blog - Medical Insights | NowCare4U",
    description: "Read the latest health articles and wellness tips from NowCare4U.",
    images: ["/images/blog-twitter.jpg"],
  },
}

export default function BlogPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Health Blog - Medical Insights & Wellness Articles",
    "description": "Read the latest health articles, medical insights, and wellness tips from NowCare4U healthcare experts.",
    "url": "https://nowcare4u.com/blog"
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Blog />
    </>
  )
}
