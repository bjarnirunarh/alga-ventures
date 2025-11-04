import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import FeaturedProjects from "@/components/sections/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Intelligence for Modern Seafood Companies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Iceland&apos;s seafood industry runs on AI. Why doesn&apos;t yours? We bring cutting-edge artificial intelligence, machine learning, and data analytics to US seafood companies — starting with market intelligence that proves ROI, then scaling to transform your entire operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} href="/schedule" size="lg">
                See AI in Action - Live Demo
              </Button>
              <Button as={Link} href="/contact" variant="outline" size="lg">
                Get Free AI Assessment
              </Button>
              <Button as={Link} href="/services" variant="outline" size="lg">
                View Intelligence Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How We Help
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Market Intelligence - PRIORITY 1 */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-2 border-primary relative">
                <div className="absolute -top-3 left-6 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  START HERE
                </div>
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-4">AI Market Intelligence & Data Services</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning price forecasting, AI-powered competitive intelligence, real-time market monitoring, custom dashboards, and species-specific intelligence with TAM/SAM/SOM analysis.
                </p>
                <Link href="/services#market-intelligence" className="text-primary hover:text-primary-dark inline-flex items-center font-semibold">
                  See Intelligence Services
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* AI Implementation - PRIORITY 2 */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-4">AI Implementation & Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Computer vision for quality control, predictive analytics & forecasting, supply chain optimization, process automation with AI, and custom ML models for your operations.
                </p>
                <Link href="/services#ai-implementation" className="text-primary hover:text-primary-dark inline-flex items-center">
                  Explore AI Solutions
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Traditional Software - PRIORITY 3 */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg md:col-span-2">
                <div className="text-3xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-4">Technology & Product Studio</h3>
                <p className="text-gray-600 mb-4">
                  Traditional software development, custom applications, data analytics, and process automation — for when AI isn&apos;t the answer or you need complementary technology solutions.
                </p>
                <Link href="/services#traditional" className="text-primary hover:text-primary-dark inline-flex items-center">
                  View All Services
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg md:col-span-2 md:mx-auto md:max-w-md">
                <h3 className="text-xl font-semibold mb-4">📊 Market Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered dashboards and analytics to understand seafood markets, pricing trends, and competitive dynamics.
                </p>
                <Link href="/services#intelligence" className="text-primary hover:text-primary-dark inline-flex items-center">
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why ALGA Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why ALGA?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prove Value First</h3>
                  <p className="text-gray-600">
                    Start with intelligence services that pay for themselves. Every project begins with ROI validation before scaling to bigger implementations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seafood-Native AI</h3>
                  <p className="text-gray-600">
                    Our models are trained on fishing, processing, and distribution data. We speak your language and understand your challenges.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Iceland-Proven, US-Focused</h3>
                  <p className="text-gray-600">
                    Best practices from European seafood AI leaders, adapted and applied to American markets and regulations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Full Implementation</h3>
                  <p className="text-gray-600">
                    From strategy to deployment — we don&apos;t just consult, we build, implement, and support your AI transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Ready to Start Your AI Journey?</h3>
              <p className="mb-6 text-center text-gray-700 max-w-xl">Get a free AI opportunity assessment and see how intelligence services can transform your seafood business.</p>
              <Button as={Link} href="/schedule" variant="primary" size="lg" className="w-full sm:w-auto">Get Your AI Opportunity Assessment</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects limit={4} />
    </main>
  );
}
