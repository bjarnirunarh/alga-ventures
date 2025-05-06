export default function TraceabilityProjectPage() {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-primary mb-4">Traceability Platform</h1>
        <p className="text-neutral-700 mb-4">
          Blockchain-backed traceability for seafood — from sea to plate — increasing transparency across the supply chain.
        </p>
        <p className="text-sm text-neutral-500 italic mb-6">Role: Product Owner</p>
        <img
          src="/projects/traceability.jpg"
          alt="Traceability Screenshot"
          className="rounded-xl shadow-md"
        />
        <p className="text-neutral-700 mt-6">
          The platform tracked catch location, handling data, and transaction history — enabling buyers to verify origin and sustainability claims.
        </p>
      </main>
    );
  }