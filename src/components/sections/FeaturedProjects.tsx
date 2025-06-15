import { MotionDiv } from "@/components/MotionDiv";
import { projects } from "@/data/projects";
import Container from "@/components/shared/Container";
import Link from "next/link";
import Button from "@/components/shared/Button";

interface FeaturedProjectsProps {
  limit?: number;
}

export default function FeaturedProjects({ limit }: FeaturedProjectsProps) {
  const featuredProjects = projects.filter((project) => project.featured && project.displayed !== false);
  const displayedProjects = limit ? featuredProjects.slice(0, limit) : featuredProjects;
  return (
    <section className="py-20 bg-[#F2F8FB]">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="block group"
            >
              <MotionDiv
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group-hover:shadow-lg"
              >
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
        {limit && (
          <div className="text-center mt-12">
            <Button as={Link} href="/projects" variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
} 