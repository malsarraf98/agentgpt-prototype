import { useState, useEffect } from "react";

const defaultClients = [
  {
    id: 1,
    name: "John & Mary Thompson",
    type: "Buyer",
    budget: "$1.5M",
    status: "Actively looking",
    nextStep: "Send 5 new comps + schedule tour Friday",
    history: [
      {
        date: "June 20, 2025",
        summary: "Looking for a starter home in Newton around $1.5M. Wants 3+ beds, good school district. Flexible timeline.",
      },
    ],
  },
  {
    id: 2,
    name: "Karen Li",
    type: "Seller",
    budget: "$950K",
    status: "Preparing to list",
    nextStep: "Email listing agreement + stager contact",
    history: [
      {
        date: "June 18, 2025",
        summary: "Discussed pricing strategy and staging. Target list date: July 10.",
      },
    ],
  },
];

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [activeEmail, setActiveEmail] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("agentgpt-crm");
    if (saved) {
      setClients(JSON.parse(saved));
    } else {
      localStorage.setItem("agentgpt-crm", JSON.stringify(defaultClients));
      setClients(defaultClients);
    }
  }, []);

  const generateEmail = (client) => {
    const latest = client.history?.[0]?.summary || "No recent summary.";
    const email = `
Hi ${client.name.split(" ")[0]},

It was great speaking with you. Here’s a quick summary of where we left off:

– ${latest}
– Next Step: ${client.nextStep}

Let me know if you have any questions or if you'd like to schedule anything else this week.

Best,  
Your Agent  
    `.trim();

    setActiveEmail(email);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
      <p className="mb-6">Track conversations, generate follow-ups, and prep comps with one click.</p>

      <div className="grid gap-6">
        {clients.map(client => (
          <div key={client.name} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{client.name} <span className="text-sm text-gray-500 ml-2">({client.type})</span></h2>
            <p className="text-sm text-gray-500 mb-2">Status: {client.status} | Budget: {client.budget}</p>
            <p className="mb-2"><strong>Next Step:</strong> {client.nextStep}</p>

            <div className="mb-4">
              <h3 className="font-semibold mb-1">Meeting History:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {client.history?.map((item, idx) => (
                  <li key={idx}><strong>{item.date}:</strong> {item.summary}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => generateEmail(client)}
              className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
            >
              Generate Follow-Up Email
            </button>
          </div>
        ))}
      </div>

      {activeEmail && (
        <div className="mt-10 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Generated Email</h2>
          <pre className="whitespace-pre-wrap">{activeEmail}</pre>
        </div>
      )}
    </div>
  );
}
