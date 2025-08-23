import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Technical Writing Academy - Master the Art of Clear Communication",
  description:
    "Comprehensive resources, courses, and guides for technical writers. Learn to create clear, concise, and effective technical documentation.",
  keywords:
    "technical writing, documentation, technical communication, writing skills, content strategy",
  authors: [{ name: "Technical Writing Academy" }],
  creator: "Technical Writing Academy",
  publisher: "Technical Writing Academy",
  robots: "index, follow",
  openGraph: {
    title: "Technical Writing Academy",
    description:
      "Master the art of technical writing with comprehensive resources and expert guidance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Writing Academy",
    description:
      "Master the art of technical writing with comprehensive resources and expert guidance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
