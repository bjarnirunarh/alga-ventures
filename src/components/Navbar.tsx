"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    pathname === path
      ? "text-blue-700 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-900">
          ALGA
        </Link>
        <div className="space-x-6 text-sm md:text-base">
          <Link href="/about" className={linkStyle("/about")}>
            About
          </Link>
          <Link href="/services" className={linkStyle("/services")}>
            Services
          </Link>
          <Link href="/contact" className={linkStyle("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
