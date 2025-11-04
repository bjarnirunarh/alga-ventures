"use client";

import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { ArrowRightIcon, ChartBarIcon, CpuChipIcon, WrenchScrewdriverIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

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
              From market intelligence that proves ROI to full AI transformation — we meet you where you are and scale with your ambition.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 1: AI Market Intelligence */}
      <section id="market-intelligence" className="py-20 md:py-32 bg-blue-50 scroll-mt-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                START HERE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Turn Market Complexity into Competitive Advantage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In seafood markets, information asymmetry = lost profit. We level the playing field with AI-driven intelligence that answers the questions keeping you up at night.
              </p>
            </div>

            {/* 5 Service Modules */}
            <div className="space-y-8 mb-16">
              {/* Module 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📊</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">1. Market Sizing & Opportunity Analysis</h3>
                    <ul className="space-y-2 mb-4 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Total Addressable Market (TAM) for species/regions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Serviceable Available Market (SAM) breakdowns</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Serviceable Obtainable Market (SOM) projections</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Entry strategy and competitive positioning</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Use Case:</p>
                      <p className="text-gray-700">&quot;Should we enter the Pacific rockfish market? What&apos;s the realistic revenue opportunity?&quot;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🐟</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">2. Species Intelligence Profiles</h3>
                    <ul className="space-y-2 mb-4 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Historical pricing trends and seasonality</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Supply chain flow analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Regulatory landscape and quota systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Competitive dynamics and market structure</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Demand drivers and buyer preferences</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Use Case:</p>
                      <p className="text-gray-700">&quot;We need to understand lobster markets before our next investment decision.&quot;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📈</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">3. Custom Intelligence Dashboards</h3>
                    <ul className="space-y-2 mb-4 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Real-time market data integration (NOAA, auctions, private data)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Interactive visualizations and filtering</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Species comparison and correlation analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>ML-powered price forecasting and trend detection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Automated alerts for market movements</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Use Case:</p>
                      <p className="text-gray-700">&quot;Give us a Bloomberg terminal for our specific seafood categories.&quot;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 4 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔍</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">4. Competitive Intelligence</h3>
                    <ul className="space-y-2 mb-4 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Competitor positioning and strategy analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Market share estimation and trends</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Product portfolio analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Pricing strategy benchmarking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>M&A and market consolidation tracking</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Use Case:</p>
                      <p className="text-gray-700">&quot;Who are the real players in New England groundfish and what&apos;s their strategy?&quot;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 5 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🤖</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">5. ML-Powered Forecasting</h3>
                    <ul className="space-y-2 mb-4 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Price prediction models using historical patterns (75-85% accuracy)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Supply forecasting based on quota/harvest data</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Demand modeling incorporating seasonality</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Scenario analysis for market changes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>Risk assessment and hedge recommendations</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Use Case:</p>
                      <p className="text-gray-700">&quot;What will scallop prices do in Q3 and how should we position inventory?&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Tiers */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">Service Tiers</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Essentials */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:border-primary transition">
                  <h4 className="text-2xl font-bold mb-2">Essentials</h4>
                  <p className="text-primary font-semibold mb-4">Timeline: 6-8 weeks</p>
                  <ul className="space-y-3 mb-6 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Market sizing (TAM/SAM/SOM) for 1-2 species</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Basic dashboard with historical data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Quarterly market briefing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </div>

                {/* Advanced */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-primary relative">
                  <div className="absolute -top-3 left-6 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Advanced</h4>
                  <p className="text-primary font-semibold mb-4">Timeline: 8-12 weeks</p>
                  <ul className="space-y-3 mb-6 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Everything in Essentials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Competitive intelligence deep-dive</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>2-4 species coverage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Real-time data integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>ML price forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Monthly analyst calls</span>
                    </li>
                  </ul>
                </div>

                {/* Enterprise */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:border-primary transition">
                  <h4 className="text-2xl font-bold mb-2">Enterprise</h4>
                  <p className="text-primary font-semibold mb-4">Timeline: 12-16 weeks</p>
                  <ul className="space-y-3 mb-6 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Everything in Advanced</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Custom terminal-style platform</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Unlimited species coverage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Proprietary data collection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Dedicated analyst support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>API access for integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button as={Link} href="/schedule" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: AI Implementation & Transformation */}
      <section id="ai-implementation" className="py-20 md:py-32 bg-white scroll-mt-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Scale AI Across Your Entire Operation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Once you&apos;ve seen the intelligence dashboard ROI, transform your entire operation with AI — from processing lines to supply chain optimization.
              </p>
            </div>

            {/* 3-Phase AI Journey */}
            <div className="space-y-8 mb-16">
              {/* Phase 1 */}
              <div className="bg-blue-50 p-8 md:p-10 rounded-lg border-2 border-primary">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Prove Value with Intelligence</h3>
                    <p className="text-primary font-semibold">Timeline: 6-12 weeks</p>
                  </div>
                </div>
                <div className="md:ml-16">
                  <h4 className="font-semibold text-lg mb-3">What we build:</h4>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Machine learning price forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>AI-powered competitive intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Real-time market monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Custom dashboards</span>
                    </li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900">Outcome: <span className="font-normal text-gray-700">Immediate ROI through better pricing and market positioning</span></p>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-gray-50 p-8 md:p-10 rounded-lg border-2 border-gray-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Strategic AI Implementation</h3>
                    <p className="text-gray-700 font-semibold">Timeline: 3-6 months</p>
                  </div>
                </div>
                <div className="md:ml-16">
                  <h4 className="font-semibold text-lg mb-3">Choose from:</h4>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Computer vision for quality control and grading</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Predictive maintenance for processing equipment</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Supply chain intelligence and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Automated catch reporting and compliance</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Custom ML models for your specific challenges</span>
                    </li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900">Outcome: <span className="font-normal text-gray-700">Significant efficiency gains and cost reduction</span></p>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-gray-50 p-8 md:p-10 rounded-lg border-2 border-gray-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Full Digital Transformation</h3>
                    <p className="text-gray-700 font-semibold">Timeline: 6-18 months</p>
                  </div>
                </div>
                <div className="md:ml-16">
                  <h4 className="font-semibold text-lg mb-3">End-to-end transformation:</h4>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>AI strategy & roadmap</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Data infrastructure buildout</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Multiple ML models across departments</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Team training and change management</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Ongoing optimization and model refinement</span>
                    </li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900">Outcome: <span className="font-normal text-gray-700">Sustainable competitive advantage through AI-first operations</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Iceland Callout Box */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 md:p-10 rounded-lg mb-12">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🇮🇸</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Proven by Iceland&apos;s Leaders</h3>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>GreenFish:</strong> 75-92% accuracy predicting fishing grounds</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Oceans of Data:</strong> Government-backed AI optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>RSF:</strong> AI price prediction for 200-300 daily auction participants</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold">The technology exists. The ROI is proven. Time to adopt it.</p>
                </div>
              </div>
            </div>

            {/* Market Intelligence */}
            <div id="intelligence" className="scroll-mt-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Market Intelligence</h2>
                  <p className="text-gray-600 mb-6">
                    AI-powered dashboards and analytics to understand seafood markets, pricing trends, and competitive dynamics.
                  </p>
                  <ul className="space-y-4 mb-8">
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
                      <span>Custom intelligence dashboards</span>
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
                      <span>Better pricing decisions</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Market opportunity identification</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                      <span>Competitive advantage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button as={Link} href="/schedule" size="lg">
                Start Your AI Journey
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Technology & Product Studio */}
      <section id="traditional" className="py-20 md:py-32 bg-blue-50 scroll-mt-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Technology & Product Studio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Traditional Software (When AI Isn&apos;t the Answer)
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Not everything needs AI. We also build custom software infrastructure for modern seafood operations.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* AI Integration (Link to Phase 2) */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
                <p className="text-gray-600 mb-6">
                  Leverage the power of artificial intelligence to optimize your operations and make data-driven decisions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Quality control automation using computer vision</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Predictive maintenance for processing equipment</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Inventory optimization and demand forecasting</span>
                  </li>
                </ul>
                <Link href="#ai-implementation" className="text-primary hover:text-primary-dark inline-flex items-center font-semibold">
                  See Full AI Implementation Journey
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Process Automation */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold mb-4">Process Automation</h3>
                <p className="text-gray-600 mb-6">
                  Streamline your operations with automated workflows and robotic process automation.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Automated data entry and processing</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Workflow automation and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Integration with existing systems</span>
                  </li>
                </ul>
              </div>

              {/* Data Analytics */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Transform your data into actionable insights with our advanced analytics solutions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Real-time performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Custom dashboards and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Predictive analytics and forecasting</span>
                  </li>
                </ul>
              </div>

              {/* Custom Software */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4">Custom Software</h3>
                <p className="text-gray-600 mb-6">
                  Develop tailored software solutions that address your specific business challenges.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Custom web and mobile applications</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Enterprise resource planning systems</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Supply chain management solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button as={Link} href="/schedule" size="lg">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-8 md:p-10 rounded-lg shadow-xl text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help you leverage AI and technology to improve your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button as={Link} href="/schedule" variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100 border-white">
                  Schedule a Free Consultation
                </Button>
                <Button as={Link} href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
