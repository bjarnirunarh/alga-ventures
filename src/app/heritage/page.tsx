"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/MotionDiv";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { useEffect } from "react";

interface HeritageImageProps {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

function HeritageImage({
  src,
  alt,
  caption,
  width = 600,
  height = 400,
  priority = false
}: HeritageImageProps) {
  return (
    <div className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            loading={priority ? undefined : "lazy"}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>
        <div className="px-4 py-3 bg-gray-50">
          <p className="text-sm sm:text-base text-gray-600 italic">{caption}</p>
        </div>
      </div>
    </div>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2 sm:py-0 touch-manipulation">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
        {year}: {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function HeritagePage() {
  // Update meta tags on client side
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    document.title = "Heritage | ALGA Ventures - Four Generations of Icelandic Innovation";

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'From Siberian driftwood to seafood AI. Discover the four-generation story behind ALGA Ventures and our legacy of transforming challenges into opportunities.');

    // OG tags
    const ogTags = [
      { property: 'og:title', content: 'Heritage | ALGA Ventures - Four Generations of Icelandic Innovation' },
      { property: 'og:description', content: 'From Siberian driftwood to seafood AI. Discover the four-generation story behind ALGA Ventures and our legacy of transforming challenges into opportunities.' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://alga.is/heritage' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Heritage | ALGA Ventures - Four Generations of Icelandic Innovation' },
      { name: 'twitter:description', content: 'From Siberian driftwood to seafood AI. Discover the four-generation story behind ALGA Ventures.' },
    ];

    ogTags.forEach(tag => {
      const selector = tag.property ? `meta[property="${tag.property}"]` : `meta[name="${tag.name}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (tag.property) {
          element.setAttribute('property', tag.property);
        } else if (tag.name) {
          element.setAttribute('name', tag.name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });
  }, []);

  return (
    <main className="min-h-screen bg-white scroll-smooth" role="main" aria-label="Heritage page content">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-32" aria-labelledby="heritage-title">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 id="heritage-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                The Alga Heritage
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Four generations of Icelandic innovation—from driftwood to digital
              </p>
            </MotionDiv>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-50">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">

            {/* THE NAME */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
                <div className="px-4 md:px-0 space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                      The Name
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      Alga—the Latin singular for algae, or &apos;þari&apos; in Icelandic—is more than a company name. It&apos;s a family legacy spanning nearly a century. My great-grandfather, Gvendur, earned the nickname &apos;Þari&apos; during seven extraordinary years in one of Iceland&apos;s most remote fjords, where he turned adversity into opportunity through ingenuity and determination.
                    </p>
                  </div>
                  <HeritageImage
                    src="/heritage/tharalaturfjordur_location.png"
                    alt="Map showing Þaraláturfjörður location in Iceland"
                    caption="Þaraláturfjörður—one of Iceland's most remote fjords in the Westfjords"
                  />
                </div>
                <div className="px-4 md:px-0">
                  <HeritageImage
                    src="/heritage/gvendur_þari_1972.png"
                    alt="Gvendur Þari 1972"
                    caption="Gvendur 'Þari' in June 1972"
                    priority={true}
                  />
                </div>
              </div>
            </MotionDiv>

            {/* THE VISION */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1 px-4 md:px-0">
                  <HeritageImage
                    src="/heritage/shoreline_house_tharalatursfjordur.png"
                    alt="Shoreline house in Þaraláturfjörður"
                    caption="The remote fjord where Gvendur built his fence pole empire"
                  />
                </div>
                <div className="order-1 md:order-2 px-4 md:px-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    The Vision (1939)
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    In 1939, while Iceland grappled with a devastating sheep epidemic that would claim 150,000 animals, Gvendur saw opportunity where others saw crisis. The government&apos;s response—building hundreds of kilometers of fence to contain disease spread—created unprecedented demand for fence poles. Meanwhile, Soviet timber operations along Siberia&apos;s Yenisei River were losing millions of logs that drifted through the Arctic Ocean to Iceland&apos;s shores.
                  </p>
                  <div className="bg-gray-50 border-l-4 border-primary p-4 sm:p-6 rounded">
                    <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                      He sold his house in Ísafjörður, packed his pregnant wife and infant daughter, and moved to a fjord where no one had lived before—or has lived since.
                    </p>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* SEVEN REVOLUTIONARY YEARS */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg mx-4 md:mx-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                  Seven Revolutionary Years
                </h2>

                {/* Timeline - Vertical on mobile, grid on desktop */}
                <div className="space-y-6 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <TimelineItem
                      year="1939"
                      title="The Move"
                      description="Arrives in Þaraláturfjörður with family"
                    />
                    <TimelineItem
                      year="1940"
                      title="Innovation"
                      description='First "fence pole farmer" to use a mechanical saw'
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <TimelineItem
                      year="1939-46"
                      title="Self-Sufficiency"
                      description="Family thrives through complete self-sufficiency farming with around 100 sheep"
                    />
                    <TimelineItem
                      year="1946"
                      title="The Return"
                      description="Returns to Ísafjörður with wealth to buy the largest house and fishing boat"
                    />
                  </div>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <HeritageImage
                    src="/heritage/tryggvi_þari_with_pole_logs.png"
                    alt="Tryggvi Þari with pole logs"
                    caption="My grandfather Tryggvi 'Þari' aboard his vessel with driftwood fence poles"
                    width={400}
                    height={300}
                  />
                  <HeritageImage
                    src="/heritage/the_farm_in_þaralátursfjörður.png"
                    alt="The farm in Þaraláturfjörður"
                    caption="Þaraláturfjörður, 1950—after the family returned to Ísafjörður"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </MotionDiv>

            {/* GENERATIONS AT SEA */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                <div className="px-4 md:px-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Generations at Sea
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    The entrepreneurial spirit and connection to the sea passed through generations. My grandfather, Tryggvi &apos;Þari,&apos; was born in Þaraláturfjörður during those seven years and inherited both the nickname and the boat. My father, Heimir &apos;Þari,&apos; continued the tradition. I went to sea with both of them, learning the industry from the deck up—from fishing boats in Iceland to seafood markets in America.
                  </p>
                </div>
                <div className="px-4 md:px-0">
                  <HeritageImage
                    src="/heritage/gvendur_tryggvi_on_boat.png"
                    alt="Gvendur and Tryggvi on boat"
                    caption="Three generations of seafood expertise"
                  />
                </div>
              </div>
            </MotionDiv>

            {/* THE DIGITAL GENERATION */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1 px-4 md:px-0">
                  <HeritageImage
                    src="/heritage/gvendur_þari.jpeg"
                    alt="Gvendur Þari"
                    caption="Gvendur 'Þari' — the first fence pole farmer to use a mechanical saw"
                  />
                </div>
                <div className="order-1 md:order-2 px-4 md:px-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    The Digital Generation
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Today, ALGA Ventures continues this legacy of innovation. Where my great-grandfather saw opportunity in driftwood and disease, we see opportunity in data and digital transformation. We&apos;re bringing the same pioneering spirit that built fence poles from Siberian timber to building {' '}
                    <Link href="/services" className="text-primary hover:text-primary-dark underline decoration-1 underline-offset-2">
                      AI solutions
                    </Link>
                    {' '}for the global seafood industry.
                  </p>
                </div>
              </div>
            </MotionDiv>

            {/* Subtle CTA Section */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-white p-8 sm:p-10 md:p-12 rounded-lg shadow-lg mx-4 md:mx-0 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Continue the Legacy
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Ready to bring the same spirit of innovation to your seafood business?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button as={Link} href="/contact" variant="primary" size="lg">
                    Get in Touch
                  </Button>
                  <Button as={Link} href="/services" variant="outline" size="lg">
                    Explore Services
                  </Button>
                </div>
              </div>
            </MotionDiv>

          </div>
        </Container>
      </section>
    </main>
  );
}
