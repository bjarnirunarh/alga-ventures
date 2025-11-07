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
          ALGA Ventures is a technology consultancy founded by Bjarni Heimisson, specializing in software development, AI integration, and data analytics for the seafood industry.
        </p>

        <p className="text-neutral-700 mb-4">
          Born in a fishing village in Iceland, Bjarni combines deep roots in the seafood industry with modern expertise in AI, product leadership, automation, and software development. From SMS-based supply chain tools to market intelligence platforms, he builds practical technology that helps seafood companies operate more efficiently.
        </p>

        <p className="text-neutral-700 mb-4">
          Bjarni&apos;s wife, Solveig Hakonardottir, leads digital innovation for Reykjavik&apos;s welfare services and occasionally contributes her expertise in design, team leadership, and education to ALGA projects.
        </p>
      </MotionDiv>

      {/* Bios */}
      <div className="mt-12 space-y-10">
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
          <p className="text-sm text-neutral-600 mb-3">Founder & Lead Developer</p>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Seafood-native product builder, AI integrator, and entrepreneur focused on making operations smarter and margins stronger. Bjarni leads all ALGA seafood technology projects, from SMS-based supply chain tools to market intelligence platforms.
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
          <h3 className="text-xl font-semibold text-primary mb-2">Solveig Hakonardottir</h3>
          <p className="text-sm text-neutral-600 mb-3">Contributing Partner</p>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Team lead for Reykjavik&apos;s digital welfare innovation team. Solveig occasionally contributes her expertise in design, team leadership, and education to ALGA projects.
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
          ALGA Ventures works with seafood companies looking to modernize operations through technology — always grounded in Icelandic values: honesty, simplicity, and hard work.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition font-semibold"
        >
          Let&apos;s Connect
        </a>
      </MotionDiv>
    </main>
  );
}
