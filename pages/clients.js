import ClientCard from '@/components/ClientCard';
import clients from '@/data/clients-data';
import Layout from '@/components/Layout';

export default function ClientsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold mb-4">Client History</h1>
        {clients.length === 0 ? (
          <p className="text-gray-600">No clients uploaded yet.</p>
        ) : (
          clients.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))
        )}
      </div>
    </Layout>
  );
}
