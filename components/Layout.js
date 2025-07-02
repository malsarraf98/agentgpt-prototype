import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Brivo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center bg-white shadow-md px-4 py-3">
        <div className="flex items-center">
          <Image src="/brivo-logo.png" alt="Brivo" width={30} height={30} />
          <span className="ml-2 font-bold text-lg text-[#247980]">Brivo</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="focus:outline-none text-[#247980]"
        >
          ☰
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={\`\${sidebarOpen ? 'block' : 'hidden'} md:block bg-white shadow-md w-48 space-y-4 py-6 px-4 absolute md:relative z-10 md:z-auto md:static top-14 left-0 md:top-0\`}
        >
          <div className="flex items-center mb-6">
            <Image src="/brivo-logo.png" alt="Brivo" width={30} height={30} />
            <span className="ml-2 font-bold text-xl text-[#247980]">Brivo</span>
          </div>
          <nav className="space-y-2 text-sm">
            <Link href="/" className="block text-[#247980] hover:underline">
              Home
            </Link>
            <Link href="/upload" className="block text-[#247980] hover:underline">
              Upload
            </Link>
            <Link href="/buyer" className="block text-[#247980] hover:underline">
              Buyer
            </Link>
            <Link href="/seller" className="block text-[#247980] hover:underline">
              Seller
            </Link>
            <Link href="/market-summary" className="block text-[#247980] hover:underline">
              Market Summary
            </Link>
            <Link href="/clients" className="block text-[#247980] hover:underline">
              Clients
            </Link>
            <Link href="/dashboard" className="block text-[#247980] hover:underline">
              Dashboard
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 mt-14 md:mt-0">{children}</main>
      </div>
    </div>
  );
}
