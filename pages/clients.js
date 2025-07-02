import clientsData from '../data/clients-data';
import ClientCard from '../components/ClientCard';

export default function ClientsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Client History</h1>
      {clientsData.length === 0 ? (
        <p className="text-gray-500">No clients yet.</p>
      ) : (
        clientsData.map((client, index) => (
          <ClientCard key={index} client={client} />
        ))
      )}
    </div>
  );
}
