import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-6 text-center text-sm text-neutral-600 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <p>© 2025 Alga Ventures LLC. All rights reserved.</p>
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
