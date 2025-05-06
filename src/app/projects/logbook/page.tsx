export default function LogbookProjectPage() {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-primary mb-4">Catch Logbook App</h1>
        <p className="text-neutral-700 mb-4">
          A digital reporting tool for fisheries to comply with government regulations and improve operational efficiency.
        </p>
        <p className="text-sm text-neutral-500 mb-6 italic">
          Role: Product Manager / Developer
        </p>
        <img
          src="/projects/logbook.jpg"
          alt="Logbook app screenshot"
          className="rounded-xl shadow-md"
        />
        <p className="text-neutral-700 mt-6">
          This tool helped modernize how fishing vessels submit and manage their logs — moving from paper to real-time compliance reporting. Integrated with national APIs and custom dashboards.
        </p>
      </main>
    );
  }
  