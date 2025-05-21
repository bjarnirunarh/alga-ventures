"use client";

import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";

const projects = [
  {
    title: "Catch Logbook App",
    summary:
      "A digital reporting tool for fisheries to comply with government regulations and improve operational efficiency.",
    role: "Product Manager / Product Owner",
    image: "/projects/logbook.jpg",
    link: "/projects/logbook",
    tags: ["Seafood", "Compliance", "Reporting"],
  },
  {
    title: "Seafood Auction System",
    summary:
      "Real-time bidding platform for wholesale seafood sales, built for both sellers and verified buyers.",
    role: "Product Manager / Team Lead",
    image: "/projects/auction.jpg",
    link: "/projects/auction",
    tags: ["Marketplace", "Bidding", "Logistics"],
  },
  {
    title: "Traceability Platform",
    summary:
      "Blockchain-backed platform that tracks seafood from boat to buyer, improving trust and accountability.",
    role: "Product Owner",
    image: "/projects/traceability.jpg",
    link: "/projects/traceability",
    tags: ["Blockchain", "Seafood", "Traceability"],
  },
  {
    title: "Seafood Analytics Portal",
    summary:
      "Internal dashboards to visualize pricing trends, supply chains, and distributor performance data.",
    role: "UX Designer / Full-stack Dev",
    image: "/projects/analytics.jpg",
    link: "/projects/analytics",
    tags: ["Analytics", "Dashboards", "Data"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Our Projects</h1>
        <p className="text-neutral-700 text-lg">
          Platforms, tools, and systems we’ve helped design, build, or lead — with a focus on seafood, logistics, and sustainability.
        </p>
      </MotionDiv>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <MotionDiv
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Link href={project.link}>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-neutral-700 mb-2">{project.summary}</p>
                <p className="text-sm text-neutral-500 italic mb-2">Role: {project.role}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </main>
  );
}
