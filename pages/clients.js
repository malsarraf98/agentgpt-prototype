import { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("agentgpt-crm")) || [];
    setClients(stored);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Client Dashboard</h1>
      {clients.length === 0 ? (
        <p>No clients yet.</p>
      ) : (
        clients.map((client) => (
          <div key={client.name} className="mb-8 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{client.name}</h2>
            <p className="mb-1 text-sm text-gray-600">
              {client.type === "buyer"
                ? `Buyer • Budget: ${client.budget} • Area: ${client.zip}`
                : `Seller • Property: ${client.property} • Goal: ${client.goal}`}
            </p>

            {client.nextStep && (
              <div className="mt-2 p-3 border border-blue-200 bg-blue-50 rounded">
                <p className="text-sm font-medium text-blue-800">Next Step:</p>
                <p className="text-blue-900">{client.nextStep}</p>
                {client.dueDate && (
                  <p className="text-xs text-blue-600 mt-1">
                    Due: {client.dueDate}
                  </p>
                )}
              </div>
            )}

            {client.history && client.history.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Meeting History:</h3>
                <ul className="space-y-2">
                  {client.history.map((entry, index) => (
                    <li key={index} className="bg-gray-100 p-3 rounded">
                      <p className="text-sm mb-1">🗓️ {entry.date}</p>
                      <p className="text-gray-700 text-sm">{entry.summary}</p>
                      {entry.nextStep && (
                        <p className="text-sm text-gray-600 mt-1">
                          Next Step: {entry.nextStep}
                          {entry.dueDate ? ` (Due: ${entry.dueDate})` : ""}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
