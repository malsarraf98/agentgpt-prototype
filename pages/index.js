import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brivo – AI for Real Estate Agents</title>
      </Head>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-16 text-center">
            <div className="flex justify-center mb-6">
              <Image src="/brivo-logo.png" alt="Brivo Logo" width={100} height={100} />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              Welcome to <span className="text-teal-600">Brivo</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Your AI-powered operating system for modern real estate agents.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">🧠 Example Client Summary</h2>
            <div className="text-gray-700 space-y-2 leading-relaxed">
              <p><strong>Name:</strong> Jane Smith</p>
              <p><strong>Needs:</strong> 3 bed, 2 bath home near good schools</p>
              <p><strong>Status:</strong> Actively touring</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">🚀 Walkthrough Demo</h2>
            <p className="text-gray-700 mb-2">
              Click <strong>“Upload”</strong> to generate a client summary from a transcript.
            </p>
            <p className="text-gray-700 mb-2">
              View saved clients in <strong>“Clients”</strong>. Use <strong>“Buyer”</strong> and <strong>“Seller”</strong> tools to assist prospects.
            </p>
            <p className="text-gray-700">
              The <strong>“Market Summary”</strong> and <strong>“Dashboard”</strong> tabs provide insights and track your performance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
