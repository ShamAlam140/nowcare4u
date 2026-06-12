import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/providers/UserProvider";
import { AdminProvider } from "@/providers/AdminProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Nowcare4U - Young & Healthy Forever",
    template: "%s | Nowcare4U",
  },
  description:
    "Nowcare4U provides comprehensive healthcare services, research, and products to help you stay young and healthy forever.",
  keywords: [
    "healthcare",
    "medical services",
    "RNA therapy",
    "cancer treatment",
    "mental health",
    "telemedicine",
    "EHR",
    "AI medical",
    "digital health",
  ],
  authors: [{ name: "Nowcare4U Healthcare Solutions" }],
  metadataBase: new URL("https://nowcare4u.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nowcare4U - Young & Healthy Forever",
    description:
      "Comprehensive healthcare services and innovative medical research",
    url: "https://nowcare4u.com",
    siteName: "Nowcare4U",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Nowcare4U - Comprehensive Healthcare Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nowcare4U - AI-Powered Healthcare Solutions",
    description:
      "Revolutionary healthcare platform with smart EHR, telemedicine, and instant medical support.",
    images: ["/images/twitter-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <UserProvider>
          <AdminProvider>{children}</AdminProvider>
        </UserProvider>
      </body>
    </html>
  );
}
