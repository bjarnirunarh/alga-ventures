"use client";

import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-6">About ALGA Ventures</h1>

        <p className="text-neutral-700 mb-6 text-lg">
          ALGA Ventures is a boutique product and innovation studio founded by Icelandic husband-and-wife team Bjarni Heimisson and Solveig Hakonardottir. We specialize in seafood tech — but we’re not just one thing.
        </p>

        <p className="text-neutral-700 mb-4">
          Bjarni was born in a fishing village and brings deep roots in the seafood industry together with modern expertise in AI, product leadership, automation, and software development. Solveig’s background in education, team leadership, and design brings care, clarity, and structure to every project we touch.
        </p>

        <p className="text-neutral-700 mb-4">
          Together, we help seafood companies modernize and grow using AI and automation — while also taking on high-impact projects in wellness, education, and tech. From launching apps to leading teams, we bring Icelandic values and Silicon Valley execution.
        </p>
      </MotionDiv>

      {/* Bios */}
      <div className="mt-12 grid md:grid-cols-2 gap-10">
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
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-primary mb-1">Bjarni Heimisson</h3>
          <p className="text-sm text-neutral-700">
            Seafood-native product builder, AI integrator, and entrepreneur — focused on making operations smarter and margins stronger.
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
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-primary mb-1">Solveig Hakonardottir</h3>
          <p className="text-sm text-neutral-700">
            Design-forward leader with a background in education, early childhood systems, and digital product development. Calm, kind, and deeply capable.
          </p>
        </MotionDiv>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-neutral-700 mb-4">
          We work with ambitious teams across seafood, wellness, education, and early-stage tech — always grounded in Icelandic values: honesty, simplicity, and hard work.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition font-semibold"
        >
          Let’s Connect
        </a>
      </MotionDiv>
    </main>
  );
}
