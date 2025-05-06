export default function AnalyticsProjectPage() {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-primary mb-4">Seafood Analytics Portal</h1>
        <p className="text-neutral-700 mb-4">
          Interactive dashboards to visualize seafood pricing trends, supply flows, and distributor performance.
        </p>
        <p className="text-sm text-neutral-500 italic mb-6">Role: UX Designer / Frontend Dev</p>
        <img
          src="/projects/analytics.jpg"
          alt="Analytics Screenshot"
          className="rounded-xl shadow-md"
        />
        <p className="text-neutral-700 mt-6">
          Designed for internal teams, the portal helped companies track KPIs, detect patterns, and plan strategic sourcing.
        </p>
      </main>
    );
  }