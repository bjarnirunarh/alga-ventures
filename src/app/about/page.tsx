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
          ALGA Ventures is a boutique innovation and product studio founded by Bjarni Heimisson and Solveig Hakonardottir, an Icelandic husband-and-wife team with deep roots in hard work, teaching, and technology.
        </p>

        <p className="text-neutral-700 mb-4">
          Born in a seafood village in Iceland, Bjarni brings firsthand knowledge of the industry combined with years of experience in product leadership, software development, and digital strategy. Solveig brings creativity, care, and structure — with a background in education, early childhood development, and web design.
        </p>

        <p className="text-neutral-700 mb-4">
          Together, we help forward-thinking teams build platforms, marketplaces, analytics tools, and more — all with clarity, speed, and purpose.
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
            Product leader, full-stack developer, and entrepreneur focused on seafood, tech, and automation.
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
            Team leader, front-end developer, educator and creative partner bringing structure, warmth, and design to every project and process.
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
          We work with teams across industries, but always with the values we grew up with in Iceland — honesty, simplicity, and hard work.
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
