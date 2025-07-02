import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-brivo-dark">Welcome to Brivo</h1>
        <p className="text-lg text-gray-700">
          Brivo is your AI-powered operating system for modern real estate agents.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold text-brivo-dark mb-2">Example Client Summary</h2>
          <p><strong>Name:</strong> Jane Smith</p>
          <p><strong>Needs:</strong> 3 bed, 2 bath home near good schools</p>
          <p><strong>Status:</strong> Actively touring</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold text-brivo-dark mb-2">Walkthrough Demo</h2>
          <p>Click "Upload" to generate a client summary from a transcript.</p>
          <p>View saved clients in "Clients". Use "Buyer" and "Seller" tools to assist prospects.</p>
        </div>
      </div>
    </Layout>
  );
}
