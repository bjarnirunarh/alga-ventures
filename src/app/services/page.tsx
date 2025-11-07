"use client";

import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We offer a comprehensive suite of technology solutions tailored to the seafood industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-blue-50">
        <Container>
          <div className="max-w-4xl mx-auto space-y-20">
            {/* AI Integration */}
            <div id="ai" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Integration</h2>
                  <p className="text-gray-600 mb-6">
                    Leverage the power of artificial intelligence to optimize your operations and make data-driven decisions.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Quality control automation using computer vision</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Predictive maintenance for processing equipment</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Inventory optimization and demand forecasting</span>
                    </li>
                  </ul>
                  <Button as={Link} href="/schedule" size="lg">
                    Get Started
                  </Button>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Reduced operational costs</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Improved product quality</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Enhanced decision-making</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Automation */}
            <div id="automation" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-gray-100 rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Increased productivity</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Reduced manual errors</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Improved consistency</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Process Automation</h2>
                  <p className="text-gray-600 mb-6">
                    Streamline your operations with automated workflows and robotic process automation.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Automated data entry and processing</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Workflow automation and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Integration with existing systems</span>
                    </li>
                  </ul>
                  <Button as={Link} href="/schedule" size="lg">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>

            {/* Data & Market Intelligence */}
            <div id="analytics" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Data & Market Intelligence</h2>
                  <p className="text-gray-600 mb-6">
                    Transform data into insights with analytics dashboards, market research, and ML-powered forecasting to drive strategic decisions.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Real-time performance monitoring and custom dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Price forecasting and trend analysis</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Market sizing and opportunity assessment</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Competitive landscape monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>ML-powered predictive analytics and forecasting</span>
                    </li>
                  </ul>
                  <Button as={Link} href="/schedule" size="lg">
                    Get Started
                  </Button>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Better business insights and data-driven decisions</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Market opportunity identification</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Improved pricing and resource allocation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Competitive advantage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Custom Software */}
            <div id="software" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-gray-100 rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Tailored to your needs</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Scalable solutions</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Ongoing support and maintenance</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Software</h2>
                  <p className="text-gray-600 mb-6">
                    Develop tailored software solutions that address your specific business challenges.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Custom web and mobile applications</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Enterprise resource planning systems</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Supply chain management solutions</span>
                    </li>
                  </ul>
                  <Button as={Link} href="/schedule" size="lg">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg flex flex-col items-center justify-center mt-4">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Ready to Transform Your Business?</h3>
              <p className="mb-6 text-center text-gray-700 max-w-xl">Let&apos;s discuss how we can help you leverage technology to improve your operations.</p>
              <Button as={Link} href="/schedule" variant="primary" size="lg" className="w-full sm:w-auto">Schedule a Free Consultation</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
