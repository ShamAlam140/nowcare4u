import type { Metadata } from "next"
import BlogDetails from "@/components/home/blog/blog-details"
import JsonLd from "@/components/seo/JsonLd"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const title = `Blog Article ${id}`;
  
  return {
    title: `${title} - NowCare4U Health Insights`,
    description: `Read detailed health articles and medical insights for topic ${id} from NowCare4U healthcare experts.`,
    alternates: {
      canonical: `/blog/${id}`,
    },
    openGraph: {
      title: `${title} | NowCare4U`,
      description: `Read detailed health articles and medical insights for topic ${id}.`,
      type: "article",
      url: `https://nowcare4u.com/blog/${id}`,
      images: [
        { 
          url: `/api/og?title=${encodeURIComponent(title)}`, 
          width: 1200, 
          height: 630 
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | NowCare4U`,
      description: `Read detailed health articles and medical insights for topic ${id}.`,
      images: [`/api/og?title=${encodeURIComponent(title)}`],
    },
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Blog Article ${id}`,
    "description": `Read detailed health articles and medical insights for topic ${id} from NowCare4U healthcare experts.`,
    "author": {
      "@type": "Organization",
      "name": "NowCare4U"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NowCare4U",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nowcare4u.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nowcare4u.com/blog/${id}`
    }
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <BlogDetails />
    </>
  )
}
