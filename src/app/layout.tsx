import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ALGA Ventures | Seafood Tech & Product Studio',
  description: 'Specialized seafood tech consultancy and modern product studio. We help seafood companies leverage AI, automation, and data tools to reduce costs and improve operations.',
  keywords: ['seafood tech', 'AI integration', 'product development', 'seafood automation', 'digital transformation'],
  openGraph: {
    title: 'ALGA Ventures | Seafood Tech & Product Studio',
    description: 'Specialized seafood tech consultancy and modern product studio. We help seafood companies leverage AI, automation, and data tools to reduce costs and improve operations.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALGA Ventures | Seafood Tech & Product Studio',
    description: 'Specialized seafood tech consultancy and modern product studio. We help seafood companies leverage AI, automation, and data tools to reduce costs and improve operations.',
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
