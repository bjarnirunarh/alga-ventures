"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path: string) =>
    pathname === path
      ? "text-primary font-semibold"
      : "text-neutral-700 hover:text-primary transition";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        {/* Logo or Brand Name */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="ALGA Logo" className="h-10 w-auto" />
        </Link>


        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-base font-medium text-center">
          <Link href="/about" onClick={() => setIsOpen(false)} className={linkClass("/about")}>About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className={linkClass("/services")}>Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={linkClass("/contact")}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
