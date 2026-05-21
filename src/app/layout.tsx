import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "Utkarsh Kumar | Backend Engineer & System Design",
    template: "%s | Utkarsh Kumar",
  },
  description: "Backend Engineer specializing in distributed systems, microservices, and high-performance applications. M.Tech student at IIIT Allahabad. Expert at Codeforces, Knight at LeetCode.",
  keywords: [
    "Utkarsh Kumar",
    "Backend Engineer",
    "Backend Developer",
    "System Design",
    "Node.js",
    "TypeScript",
    "Microservices",
    "Distributed Systems",
    "Competitive Programming",
    "Codeforces Expert",
    "LeetCode Knight",
    "IIIT Allahabad",
    "Software Engineer",
    "SDE",
  ],
  authors: [{ name: "Utkarsh Kumar" }],
  creator: "Utkarsh Kumar",
  openGraph: {
    title: "Utkarsh Kumar | Backend Engineer & System Design",
    description: "Backend Engineer specializing in distributed systems, microservices, and high-performance applications. Expert at Codeforces.",
    url: "https://utkarshkumar.dev",
    siteName: "Utkarsh Kumar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utkarsh Kumar | Backend Engineer & System Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Kumar | Backend Engineer",
    description: "Backend Engineer specializing in distributed systems and microservices.",
    creator: "@utkarsh9401",
    images: ["/og-image.png"],
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
      <body className={`${inter.variable} overflow-x-hidden`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
