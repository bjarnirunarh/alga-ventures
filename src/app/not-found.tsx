export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">Page Not Found</h1>
      <p className="text-neutral-700 mb-6">
        Sorry, the page you’re looking for doesn’t exist or has moved.
      </p>
      <a
        href="/"
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition font-semibold"
      >
        Go back home
      </a>
    </main>
  );
}
