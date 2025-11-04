import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'ALGA Ventures | AI-Powered Seafood Intelligence & Technology',
  description: 'Bringing Iceland\'s AI innovation to US seafood markets. We provide AI-powered market intelligence, machine learning forecasting, and full AI implementation for seafood companies.',
  keywords: ['seafood AI', 'market intelligence', 'machine learning', 'AI consulting', 'seafood analytics', 'price forecasting', 'competitive intelligence', 'seafood technology', 'Iceland AI', 'data science'],
  openGraph: {
    title: 'ALGA Ventures | AI-Powered Seafood Intelligence',
    description: 'Bringing Iceland\'s AI innovation to US seafood markets. Start with market intelligence that proves ROI, then scale to full AI transformation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALGA Ventures | AI-Powered Seafood Intelligence',
    description: 'Iceland\'s seafood industry runs on AI. Why doesn\'t yours? We bring cutting-edge AI, ML, and data analytics to US seafood companies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
