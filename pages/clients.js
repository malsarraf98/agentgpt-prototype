import { useState } from 'react';
import Layout from '@/components/Layout';
import ClientCard from '@/components/ClientCard';
import clients from '@/data/clients-data';

export default function ClientsPage() {
  const [filterTag, setFilterTag] = useState('All');

  const filteredClients = filterTag === 'All'
    ? clients
    : clients.filter(client => client.tag.toLowerCase() === filterTag.toLowerCase());

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4">Clients</h1>

        <div className="mb-4">
          <label htmlFor="tagFilter" className="mr-2 font-medium">Filter by Tag:</label>
          <select
            id="tagFilter"
            value={filterTag}
            onChange={e => setFilterTag(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option>All</option>
            <option>Buyer</option>
            <option>Seller</option>
            <option>Investor</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredClients.map(client => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
