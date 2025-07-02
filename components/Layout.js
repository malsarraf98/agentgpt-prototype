import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen font-sans">
      <aside className="w-64 bg-[#00BFA6] text-white p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <Image src="/brivo-logo.png" alt="Brivo Logo" width={40} height={40} />
          <span className="text-2xl font-semibold tracking-tight">Brivo</span>
        </div>
        <nav className="flex flex-col space-y-3 mt-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/upload" className="hover:underline">Upload</Link>
          <Link href="/buyer" className="hover:underline">Buyer</Link>
          <Link href="/seller" className="hover:underline">Seller</Link>
          <Link href="/market-summary" className="hover:underline">Market Summary</Link>
          <Link href="/clients" className="hover:underline">Clients</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-white overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
