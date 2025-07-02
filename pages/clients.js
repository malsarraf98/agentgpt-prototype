import clients from "@/data/clients-data";
import Layout from "@/components/Layout";

export default function Clients() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Client Profiles</h1>
        <div className="space-y-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl shadow p-6 border border-gray-200"
            >
              <h2 className="text-lg font-semibold">{client.name}</h2>
              <div className="flex flex-wrap mt-2 mb-3 gap-2">
                {client.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700">{client.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
