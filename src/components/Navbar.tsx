"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const linkClass = (path: string) =>
    pathname === path
      ? "text-primary font-semibold"
      : "text-neutral-700 hover:text-primary transition";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="ALGA Logo" width={100} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/projects" className={linkClass("/projects")}>Projects</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 shadow-md">
          <div className="flex flex-col items-center space-y-4 px-4 py-6 text-base font-medium">
            <Link href="/about" onClick={() => setIsOpen(false)} className={linkClass("/about")}>About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className={linkClass("/services")}>Services</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className={linkClass("/projects")}>Projects</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className={linkClass("/contact")}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
