import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/header/Header";
import СodeBackground from "@/components/layout/CodeBackground";
import Footer from "../components/layout/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Vitalii Prytula | Frontend Developer | React, TypeScript, Next.js, Tailwind CSS | Team Lead & UI Expert",
  description:
    "Skilled Frontend Engineer with strong expertise in React, TypeScript, and Tailwind CSS. Proven track record in leading teams, building responsive UIs, and delivering high-quality web applications. Open to impactful projects and leadership opportunities.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "TypeScript Engineer",
    "Tailwind CSS",
    "UI Developer",
    "Frontend Team Lead",
    "Web Development",
    "Responsive Design",
    "JavaScript Developer",
    "Remote Frontend Jobs",
  ],
  authors: [
    {
      name: "Vitalii Prytula",
      url: "https://portfolio-vitaliy.vercel.app",
    },
  ],
  creator: "Vitalii Prytula",
  publisher: "Vitalii Prytula",
  openGraph: {
    title: "Experienced Frontend Engineer | React, TypeScript, Tailwind CSS",
    description:
      "Portfolio of an experienced frontend engineer with a focus on React, TypeScript, and UI excellence.",
    url: "https://portfolio-vitaliy.vercel.app",
    siteName: "Vitalii Prytula | Frontend Engineer",
    images: [
      {
        url: "https://portfolio-vitaliy.vercel.app/images.png",
        width: 1200,
        height: 630,
        alt: "Frontend Engineer Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vitalii Prytula | Frontend Developer | React, TypeScript, Tailwind CSS",
    description:
      "Frontend Engineer with expertise in React, TypeScript and modern UI. Portfolio and contact info.",
    images: ["https://portfolio-vitaliy.vercel.app/images.png"],
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="canonical" href="https://portfolio-vitaliy.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vitalii Prytula",
              url: "https://portfolio-vitaliy.vercel.app",
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Remote Projects",
              },
              sameAs: [
                "https://www.linkedin.com/in/vitaliiprytula/",
                "https://github.com/VitaliyPritula",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Header />
        <main className="flex-1 relative" id="main-content">
          <СodeBackground />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
