import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-6 text-center text-sm text-neutral-600">
      <p>© 2025 Alga Ventures LLC. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <Link href="/terms" className="hover:text-primary">
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-primary">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
