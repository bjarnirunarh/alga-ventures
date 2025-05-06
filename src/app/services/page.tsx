"use client";

import { MotionDiv } from "@/components/MotionDiv";
import {
  Compass,
  Code,
  DollarSign,
} from "lucide-react"; // import icons

export default function ServicesPage() {
  const services = [
    {
      title: "Product Advisory & Leadership",
      icon: <Compass className="w-8 h-8 text-primary mb-4 mx-auto" />,
      description:
        "We help founders and product teams define, validate, and deliver impactful digital products. From early-stage ideation to scaling roadmaps, we guide you through product strategy, decision-making, and execution.",
    },
    {
      title: "Custom App & Platform Development",
      icon: <Code className="w-8 h-8 text-primary mb-4 mx-auto" />,
      description:
        "We design and build web platforms, internal tools, dashboards, and marketplaces using React, Next.js, and modern frameworks. Ideal for MVPs, seafood systems, or growing digital services.",
    },
    {
      title: "Digital Growth & Monetization",
      icon: <DollarSign className="w-8 h-8 text-primary mb-4 mx-auto" />,
      description:
        "We create systems for passive income, digital products, and repeatable sales. Whether it’s automation, analytics, or audience engagement — we help you turn ideas into sustainable revenue.",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-neutral-700 text-lg">
          We bring your ideas to life through strategy, code, and care — helping founders, teams, and organizations build smarter.
        </p>
      </MotionDiv>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <MotionDiv
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-neutral-50 rounded-xl shadow-md p-6 text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
            <p className="text-neutral-700 text-sm">{service.description}</p>
          </MotionDiv>
        ))}
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition font-semibold"
        >
          Let’s Talk About Your Project
        </a>
      </MotionDiv>
    </main>
  );
}
