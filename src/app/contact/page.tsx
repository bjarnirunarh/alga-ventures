"use client";

import { MotionDiv } from "@/components/MotionDiv";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-center">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Let’s Talk</h1>
        <p className="text-neutral-700 text-lg mb-2">
          Interested in working together? Reach out and we’ll get back to you.
        </p>
        <p className="mb-2">
          📩 <strong>hello@alga.is</strong>
        </p>
        <p className="mb-6">
          📅 <a href="https://calendly.com/" className="text-primary underline">Book a Call</a>
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-neutral-600 mb-1 text-sm">We’re currently accepting limited projects for 2025.</p>
        <p className="text-sm text-neutral-500 mb-6">We respect your privacy. No spam. No data sharing.</p>

        <form
          action="https://formsubmit.co/bjarni@alga.is"
          method="POST"
          className="space-y-4 max-w-md mx-auto text-left"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border border-neutral-300 p-3 rounded-lg"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border border-neutral-300 p-3 rounded-lg"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full border border-neutral-300 p-3 rounded-lg h-32"
          />
          <button
            type="submit"
            className="w-full bg-[#1C5A7D] text-white px-6 py-3 rounded-lg hover:bg-[#174761] transition font-semibold"
          >
            Send Message
          </button>
        </form>

        <p className="text-xs text-neutral-400 mt-4">
          Powered by <a href="https://formsubmit.co" className="underline">FormSubmit</a>
        </p>
      </MotionDiv>
    </main>
  );
}
