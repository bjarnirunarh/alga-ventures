import Navbar from "@/components/Navbar";
import { MotionSection } from "@/components/MotionDiv";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      {/* Hero Section */}
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 text-center bg-gradient-to-b from-blue-900 to-blue-700 text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Advisory. Development. Digital Ventures.</h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Helping startups and companies launch digital products, grow revenue, and build scalable systems — from idea to execution.
        </p>
        <a href="/contact" className="mt-8 inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition">
          Let’s Work Together
        </a>
      </MotionSection>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Your Strategic Partner for Digital Growth</h2>
        <p className="text-lg">
          ALGA Ventures is a founder-led advisory and development studio helping forward-thinking companies thrive in a digital-first world.
          Whether you need strategy, an MVP, or scalable infrastructure — we help you move fast, with intention.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Startup Advisory</h3>
              <p className="text-gray-700">Launch smarter with product guidance, GTM strategy, and operational support.</p>
            </div>
            <div className="bg-white shadow p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Web & App Development</h3>
              <p className="text-gray-700">Modern websites, apps, and MVPs using React, Next.js, and Shopify.</p>
            </div>
            <div className="bg-white shadow p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Passive Income Systems</h3>
              <p className="text-gray-700">Monetization strategies and automation for digital product ecosystems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <p className="text-lg text-gray-700 mb-4">We build fast, flexible, and future-proof. Portfolio coming soon.</p>
        <div className="mt-4">
          <img src="/logo.png" alt="Alga logo" className="mx-auto w-32 opacity-20" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
        <p className="text-lg text-gray-700 mb-6">Taking on limited new projects in 2025. If you’re building something — let’s connect.</p>
        <p className="font-semibold text-blue-800">📨 hi@alga.is</p>
        <p className="mt-2"><a href="https://calendly.com/" className="underline text-blue-700 hover:text-blue-900">Book a Call</a></p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ALGA Ventures. All rights reserved.
      </footer>
    </main>
  );
}
