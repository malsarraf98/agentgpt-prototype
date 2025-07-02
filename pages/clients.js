import ClientCard from '@/components/ClientCard';

const sampleClients = [
  {
    name: 'Jessica W.',
    email: 'jessica@example.com',
    tag: 'Hot Lead',
    notes: 'Looking for a 3BR in Newton under $1.2M. Prefers walkable neighborhood.',
  },
  {
    name: 'Paul R.',
    email: 'paul@example.com',
    tag: 'Investor',
    notes: 'Owns 4 properties. Wants to offload 2 and trade up via 1031 exchange.',
  },
];

export default function ClientsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Client Dashboard</h1>
      {sampleClients.map((client, i) => (
        <ClientCard key={i} client={client} />
      ))}
    </div>
  );
}
