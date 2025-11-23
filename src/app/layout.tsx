import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Utkarsh Kumar - Full Stack Developer",
  description: "Portfolio of Utkarsh Kumar - Full Stack Developer specializing in Next.js, React, Node.js, WebSockets, and WebRTC. M.Tech student at IIIT Allahabad.",
  keywords: ["Utkarsh Kumar", "Full Stack Developer", "Next.js", "React", "Node.js", "Web Developer", "IIIT Allahabad"],
  authors: [{ name: "Utkarsh Kumar" }],
  openGraph: {
    title: "Utkarsh Kumar - Full Stack Developer",
    description: "Portfolio showcasing projects, skills, and achievements",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
