import { useState } from 'react';
import clientsData from '../data/clients-data';
import ClientCard from '../components/ClientCard';

export default function ClientsPage() {
  const [filter, setFilter] = useState('All');

  const filteredClients =
    filter === 'All'
      ? clientsData
      : clientsData.filter((client) => client.tag === filter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <select
          className="border border-gray-300 p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
          <option value="Investor">Investor</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredClients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
}
