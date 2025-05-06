"use client";

import { MotionSection } from "@/components/MotionDiv";

export default function Hero() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center px-6 py-24 bg-[#E8F1F6]" // <<< light teal!
    >
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
        Advisory. Development. Digital Ventures.
      </h1>
      <p className="text-lg md:text-xl text-neutral-700 mb-10 max-w-2xl mx-auto">
        Helping startups and companies launch digital products, grow revenue, and build scalable systems — from idea to execution.
      </p>
      <a
        href="/contact"
        className="inline-block bg-[#1C5A7D] text-white px-6 py-3 rounded-xl hover:bg-[#174761] transition font-semibold"
      >
        Let’s Work Together
      </a>
    </MotionSection>
  );
}
