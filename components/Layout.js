import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen font-sans">
      <aside className="w-64 bg-teal-700 text-white p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <div className="text-3xl">🏠</div>
          <h1 className="text-2xl font-bold">Brivo</h1>
        </div>
        <nav className="flex flex-col space-y-2">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/upload" className="hover:underline">Upload</Link>
          <Link href="/buyer" className="hover:underline">Buyer</Link>
          <Link href="/seller" className="hover:underline">Seller</Link>
          <Link href="/market-summary" className="hover:underline">Market Summary</Link>
          <Link href="/clients" className="hover:underline">Clients</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
