export default function AuctionProjectPage() {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-primary mb-4">Seafood Auction System</h1>
        <p className="text-neutral-700 mb-4">
          A real-time bidding platform for wholesale seafood sales, built for both sellers and verified buyers.
        </p>
        <p className="text-sm text-neutral-500 italic mb-6">Role: Product Advisor / Backend Lead</p>
        <img
          src="/projects/auction.jpg"
          alt="Auction Screenshot"
          className="rounded-xl shadow-md"
        />
        <p className="text-neutral-700 mt-6">
          The system supported transparent pricing, dynamic inventory, and compliance features. Built with real-time notifications and a custom admin dashboard for sellers.
        </p>
      </main>
    );
  }