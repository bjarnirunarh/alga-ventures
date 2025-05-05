export default function ContactPage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Let’s Talk</h1>
      <p className="text-lg">📨 Email us at <strong>hi@alga.is</strong></p>
      <p className="mt-2"><a href="https://calendly.com/" className="text-blue-700 underline">Book a Call</a></p>
      <p className="mt-4 text-gray-600">Taking on limited new projects in 2025. If you’re building something — let’s connect.</p>
      <p className="mt-8 text-lg font-semibold">Or send us a message:</p>
      <p className="text-sm text-gray-500">We’ll get back to you as soon as possible.</p>
      <p className="text-sm text-gray-500">We respect your privacy. Your information will not be shared.</p>
      <p className="text-sm text-gray-500">Powered by <a href="https://formsubmit.co/" className="text-blue-700 underline">FormSubmit</a></p>
      <form action="https://formsubmit.co/bjarni@alga.is" method="POST" className="space-y-4 max-w-md mx-auto">
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="name" required placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" name="email" required placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea name="message" required placeholder="Your Message" className="w-full border p-2 rounded h-32"></textarea>
        <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
          Send Message
        </button>
      </form>
    </div>
  );
}
