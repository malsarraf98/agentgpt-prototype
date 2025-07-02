import ClientCard from '@/components/ClientCard';
import clients from '@/data/clients-data';

export default function ClientsPage() {
  return (
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
  );
}
