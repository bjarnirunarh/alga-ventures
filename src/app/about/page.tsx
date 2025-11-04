"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/MotionDiv";
import Button from "@/components/shared/Button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bridging Iceland&apos;s AI Innovation with US Seafood Markets
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              While Iceland&apos;s seafood industry has embraced AI and machine learning for competitive advantage, US companies are falling behind. We&apos;re changing that.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* The Opportunity */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Opportunity</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Iceland has become Europe&apos;s leader in seafood AI innovation. Companies like <strong>GreenFish</strong> use machine learning to predict fishing grounds with <strong>92% accuracy</strong>. <strong>Oceans of Data</strong> optimizes supply chains with artificial intelligence. <strong>RSF</strong> runs AI-powered price predictions for hundreds of daily auction participants. The technology works. The ROI is proven.
                </p>
                <p>
                  Meanwhile, US seafood companies are stuck with manual Excel spreadsheets, gut-feel decisions, and information asymmetry that costs millions in lost profit.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  ALGA Ventures brings Iceland&apos;s cutting-edge AI capabilities to American seafood markets. We combine deep seafood industry knowledge with advanced data science and machine learning to help US companies catch up—and eventually lead.
                </p>
                <p>
                  We start by proving value: custom AI-powered market intelligence dashboards that deliver immediate ROI through better pricing, smarter buying, and competitive advantage. Then we scale to full AI transformation of operations.
                </p>
              </div>
            </div>

            {/* Why We're Different */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We&apos;re Different</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Unlike generic AI consultancies, we understand seafood. We know quota systems, seasonality, supply chain dynamics, and regulatory complexity. Unlike data providers, we don&apos;t just give you raw information—we deliver analyzed intelligence and build the AI systems to act on it.
                </p>
                <p className="font-semibold text-gray-900">
                  We&apos;re the only firm that provides both the intelligence AND implements the technology.
                </p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What We Believe
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">AI adoption should start with proof, not faith</h3>
                    <p className="text-gray-600">Show measurable results before asking for big commitments</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Market intelligence is the best proof-of-concept for AI ROI</h3>
                    <p className="text-gray-600">Immediate value through better pricing and market positioning</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Seafood-specific models outperform generic approaches</h3>
                    <p className="text-gray-600">Industry knowledge + AI = superior results</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">US companies deserve the same AI advantages as Iceland&apos;s leaders</h3>
                    <p className="text-gray-600">Technology shouldn&apos;t be a competitive disadvantage</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Approach
            </h2>
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Prove Value</h3>
                  <p className="text-gray-700 text-lg">
                    Start with AI-powered market intelligence that delivers measurable ROI in weeks, not years.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Build Trust</h3>
                  <p className="text-gray-700 text-lg">
                    Show what AI can do with your data before asking for bigger commitments.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Transform Operations</h3>
                  <p className="text-gray-700 text-lg">
                    Scale from intelligence to full AI implementation across your business.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Continuous Innovation</h3>
                  <p className="text-gray-700 text-lg">
                    AI isn&apos;t a one-time project—it&apos;s ongoing optimization and competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Backed by Proven Methodologies */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Backed by Proven Methodologies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">GreenFish-Style Predictive Modeling</h3>
                    <p className="text-blue-100">
                      Advanced ML techniques proven in Iceland&apos;s fishing industry
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Oceans of Data-Inspired Intelligence Platforms</h3>
                    <p className="text-blue-100">
                      Real-time data integration and visualization frameworks
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Iceland&apos;s Government-Backed AI Research</h3>
                    <p className="text-blue-100">
                      Leveraging publicly funded innovation for commercial application
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Applied to US Markets</h3>
                    <p className="text-blue-100">
                      Local data, regulatory knowledge, and market-specific customization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Team Bios */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Image
                src="/bjarni.jpg"
                alt="Bjarni Heimisson"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-primary mb-2">Bjarni Heimisson</h3>
              <p className="text-gray-600 mb-3">Co-Founder & AI Lead</p>
              <p className="text-gray-700">
                Born in a fishing village, Bjarni brings deep seafood industry roots combined with modern expertise in AI, machine learning, and product development. He bridges traditional seafood knowledge with cutting-edge technology.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Image
                src="/solveig.jpg"
                alt="Solveig Hakonardottir"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-primary mb-2">Solveig Hakonardottir</h3>
              <p className="text-gray-600 mb-3">Co-Founder & Operations Lead</p>
              <p className="text-gray-700">
                With a background in education, team leadership, and design, Solveig ensures every project combines technical excellence with clarity and care. She leads operations and client success.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Bring AI to Your Seafood Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start with a free AI opportunity assessment and see how market intelligence can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} href="/schedule" size="lg">
                Get Your AI Assessment
              </Button>
              <Button as={Link} href="/contact" variant="outline" size="lg">
                Schedule Strategy Call
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </main>
  );
}
