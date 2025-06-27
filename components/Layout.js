import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen font-sans">
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-6">
        <h1 className="text-xl font-bold">AgentGPT</h1>
        <nav className="flex flex-col space-y-2">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/upload" className="hover:underline">Upload</Link>
          <Link href="/buyer" className="hover:underline">Buyer</Link>
          <Link href="/seller" className="hover:underline">Seller</Link>
          <Link href="/market-summary" className="hover:underline">Market Summary</Link>
          <Link href="/agent-stats" className="hover:underline">Agent Stats</Link>
          <Link href="/clients" className="hover:underline">Clients</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
