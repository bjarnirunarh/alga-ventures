import Hero from "@/components/Hero";
import { MotionDiv } from "@/components/MotionDiv";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">
      <Hero />

      {/* Wavy Divider */}
      <div className="-mt-1">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F3F4F6"
            d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* What We Do */}
      <section className="py-20 px-6 bg-neutral-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Advisory & Leadership",
                description:
                  "Guiding early-stage and scaling teams with product strategy, roadmap execution, and technical decision-making.",
              },
              {
                title: "Custom App & Platform Development",
                description:
                  "Hands-on development of data tools, traceability systems, auctions, dashboards, and MVPs using React and Next.js.",
              },
              {
                title: "Digital Growth & Monetization",
                description:
                  "Helping founders and teams create sustainable income through digital product ecosystems and automation.",
              },
            ].map((service, index) => (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-700">{service.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="-mt-1">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F2F8FB"
            d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Recent Projects */}
      <section className="py-20 px-6 bg-[#F2F8FB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Recent Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Catch Logbook App",
                summary:
                  "Digital reporting tool for fisheries compliance and efficiency.",
                role: "Product Manager / Developer",
              },
              {
                title: "Seafood Auction System",
                summary:
                  "Real-time bidding platform for wholesale seafood sales.",
                role: "Product Advisor / Backend Lead",
              },
              {
                title: "Traceability Platform",
                summary:
                  "Blockchain-backed system to track seafood from sea to plate.",
                role: "Product Owner",
              },
              {
                title: "Seafood Analytics Portal",
                summary:
                  "Data dashboards for pricing, supply, and performance analytics.",
                role: "UX Designer / Frontend Dev",
              },
            ].map((project, index) => (
              <MotionDiv
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-700 mb-2">{project.summary}</p>
                <p className="text-sm text-neutral-500 italic">
                  Role: {project.role}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      
      {/* Wavy Divider */}
      <div className="-mt-1">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F3F4F6"
            d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Contact / Let's Talk Section */}
      <section className="py-24 px-6 bg-neutral-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-neutral-700 mb-8 text-lg">
            Ready to build something together? Whether you need advisory, development, or a sounding board — We&apos;re here.
          </p>
          <a
            href="mailto:hi@alga.is"
            className="inline-block bg-[#1C5A7D] text-white px-6 py-3 rounded-xl hover:bg-[#174761] transition font-semibold"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
