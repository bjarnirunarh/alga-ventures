import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "ALGA Ventures",
  description: "Advisory. Development. Digital Ventures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className + " bg-white text-neutral-900 font-sans"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
