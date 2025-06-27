import { useState } from "react";

const mockClients = [
  {
    id: 1,
    name: "John & Mary Thompson",
    type: "Buyer",
    budget: "$1.5M",
    status: "Actively looking",
    lastMeeting: "June 20, 2025",
    summary: "Looking for a starter home in Newton around $1.5M. Wants 3+ beds, good school district. Flexible on timeline, aiming for late summer move.",
    nextStep: "Send 5 new comps + schedule tour Friday",
  },
  {
    id: 2,
    name: "Karen Li",
    type: "Seller",
    budget: "$950K",
    status: "Preparing to list",
    lastMeeting: "June 18, 2025",
    summary: "Wants to list her 2BR condo in Somerville. Discussed pricing strategy and staging. Target list date: July 10.",
    nextStep: "Email listing agreement + stager contact",
  },
];

export default function Clients() {
  const [clients, setClients] = useState(mockClients);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
      <p className="mb-6">Track conversations, generate follow-ups, and prep comps with one click.</p>

      <div className="grid gap-6">
        {clients.map(client => (
          <div key={client.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{client.name} <span className="text-sm text-gray-500 ml-2">({client.type})</span></h2>
            <p className="text-sm text-gray-500 mb-2">Status: {client.status} | Budget: {client.budget}</p>
            <p className="text-gray-800 mb-2"><strong>Last Meeting:</strong> {client.lastMeeting}</p>
            <p className="mb-2"><strong>Summary:</strong> {client.summary}</p>
            <p className="mb-4"><strong>Next Step:</strong> {client.nextStep}</p>
            <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700">
              Generate Follow-Up Email
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
