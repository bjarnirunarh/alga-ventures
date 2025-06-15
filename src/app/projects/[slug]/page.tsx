import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/shared/Container';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectDetailPage({ params }: any) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-6">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link href="/projects" className="text-blue-700 hover:underline mb-6 inline-block">← Back to Projects</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{project.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{project.summary}</p>
            <p className="text-sm text-neutral-500 italic mb-8">Role: {project.role}</p>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Project Content */}
      <section className="pt-0 pb-16 bg-[#F2F8FB]">
        <Container>
          <div className="max-w-4xl mx-auto">
            {project.image && (
              <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            <div className="prose prose-lg max-w-none text-gray-900 whitespace-pre-line bg-white p-8 rounded-xl shadow-sm">
              {project.details}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
} 