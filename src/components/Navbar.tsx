'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-sm flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-900 tracking-wider">
        ALGA
      </Link>
      <div className="space-x-6">
        <Link href="/about" className="text-blue-900 hover:underline">About</Link>
        <Link href="/services" className="text-blue-900 hover:underline">Services</Link>
        <Link href="/projects" className="text-blue-900 hover:underline">Projects</Link>
        <Link href="/contact" className="text-blue-900 hover:underline">Contact</Link>
        <img src="/alga-logo.png" alt="ALGA Logo" className="h-8" />
      </div>
    </nav>
  )
}
