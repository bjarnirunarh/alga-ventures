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
              Transforming Seafood with Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We help seafood companies leverage AI, automation, and data tools to reduce costs and improve operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} href="/schedule" size="lg">
                Book a Call
              </Button>
              <Button as={Link} href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How We Help
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">AI Integration</h3>
                <p className="text-gray-600 mb-4">
                  Implement AI solutions to optimize processing, quality control, and inventory management.
                </p>
                <Link href="/services#ai" className="text-primary hover:text-primary-dark inline-flex items-center">
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
                <p className="text-gray-600 mb-4">
                  Automate repetitive tasks and streamline operations to increase efficiency and reduce costs.
                </p>
                <Link href="/services#automation" className="text-primary hover:text-primary-dark inline-flex items-center">
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Transform raw data into actionable insights to make better business decisions.
                </p>
                <Link href="/services#analytics" className="text-primary hover:text-primary-dark inline-flex items-center">
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Custom Software</h3>
                <p className="text-gray-600 mb-4">
                  Develop tailored software solutions to address your specific business needs.
                </p>
                <Link href="/services#software" className="text-primary hover:text-primary-dark inline-flex items-center">
                  Learn more
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Ready to Transform Your Business?</h3>
              <p className="mb-6 text-center text-gray-700 max-w-xl">Let&apos;s discuss how we can help you leverage technology to improve your operations.</p>
              <Button as={Link} href="/schedule" variant="primary" size="lg" className="w-full sm:w-auto">Schedule a Free Consultation</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects limit={4} />
    </main>
  );
}
