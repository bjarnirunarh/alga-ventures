export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Privacy Policy</h1>

      <p className="text-neutral-700 mb-4">
        At Alga Ventures LLC, we respect your privacy. This website does not collect personal information unless you voluntarily submit it through our contact form or by email.
      </p>

      <p className="text-neutral-700 mb-4">
        We do not use cookies, analytics tools, or third-party trackers. We do not sell, rent, or share your information with anyone. If you contact us, your information will be used solely to respond to your inquiry.
      </p>

      <p className="text-neutral-700 mb-4">
        Our forms are powered by <a href="https://formsubmit.co" target="_blank" rel="noopener noreferrer" className="text-primary underline">FormSubmit</a>, a privacy-respecting form backend. Submitted data is emailed directly to us and not stored on this site.
      </p>

      <p className="text-neutral-700">
        This policy may be updated from time to time. For questions, contact us at <a href="mailto:hello@alga.is" className="text-primary underline">hello@alga.is</a>.
      </p>
    </main>
  );
}
