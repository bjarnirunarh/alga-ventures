"use client";

import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const visibleProjects = projects.filter((project) => project.displayed !== false);
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
          Platforms, tools, and systems we&apos;ve helped design, build, or lead — with a focus on seafood, logistics, and sustainable innovation.
        </p>
      </MotionDiv>

      <div className="grid md:grid-cols-2 gap-8">
        {visibleProjects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="block group">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group-hover:shadow-lg"
            >
              {project.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-700 mb-4">{project.summary}</p>
              <p className="text-sm text-neutral-500 italic mb-4">
                Role: {project.role}
              </p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </MotionDiv>
          </Link>
        ))}
      </div>
    </main>
  );
}
