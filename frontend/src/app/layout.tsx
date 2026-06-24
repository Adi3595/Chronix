import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chronix OS | Execution Without Chaos",
  description: "Chronix OS is a premium executive productivity suite. It transforms your goals, deadlines, and responsibilities into clear, autonomous execution paths powered by 6 intelligent agents.",
  keywords: ["productivity", "executive suite", "AI agents", "task management", "goal tracking", "Chronix OS", "neural suite"],
  authors: [{ name: "Chronix Team" }],
  creator: "Chronix Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chronix.os",
    title: "Chronix OS | Execution Without Chaos",
    description: "Premium autonomous executive suite powered by 6 distinct AI agents.",
    siteName: "Chronix OS",
    images: [{
      url: "https://chronix.os/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Chronix OS Dashboard Overview"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronix OS | Execution Without Chaos",
    description: "Premium autonomous executive suite powered by AI agents.",
    images: ["https://chronix.os/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
