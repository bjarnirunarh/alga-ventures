"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (path: string) =>
    pathname === path
      ? "text-blue-700 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" alt="ALGA Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center text-base">
          <Link href="/about" className={linkStyle("/about")} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <br />
          <Link href="/services" className={linkStyle("/services")} onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <br />
          <Link href="/contact" className={linkStyle("/contact")} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
