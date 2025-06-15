import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

export default function ContactSection() {
  return (
    <section className="py-24 bg-neutral-100">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-neutral-700 mb-8 text-lg">
            Whether you need seafood automation, a custom platform, or product leadership — we&apos;re here to help you build with clarity and momentum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="a" href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button as="a" href="/schedule" variant="outline">
              Book a Call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
} 