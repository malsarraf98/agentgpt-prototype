import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [clients, setClients] = useState([]);
  const [today, setToday] = useState("");
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("agentgpt-crm")) || [];
    setClients(stored);

    const todayStr = new Date().toISOString().split("T")[0];
    setToday(todayStr);
  }, []);

  useEffect(() => {
    const dueNow = [];

    clients.forEach((client) => {
      if (client.history && client.history.length > 0) {
        client.history.forEach((entry) => {
          if (entry.dueDate === today) {
            dueNow.push({
              name: client.name,
              step: entry.nextStep,
              date: entry.dueDate,
            });
          }
        });
      }
    });

    setReminders(dueNow);
  }, [clients, today]);

  const totalClients = clients.length;
  let completedCount = 0;

  clients.forEach((client) => {
    if (client.history && client.history.length > 0) {
      completedCount += client.history.length;
    }
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Agent Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Total Clients</h2>
          <p className="text-3xl">{totalClients}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Tasks Due Today</h2>
          <p className="text-3xl">{reminders.length}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Total Summaries</h2>
          <p className="text-3xl">{completedCount}</p>
        </div>
      </div>

      {reminders.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📬 Reminders for Today</h2>
          <ul className="space-y-2">
            {reminders.map((reminder, idx) => (
              <li
                key={idx}
                className="bg-yellow-100 border border-yellow-300 p-4 rounded"
              >
                <p className="text-sm font-semibold">{reminder.name}</p>
                <p className="text-sm">{reminder.step}</p>
                <p className="text-xs text-gray-600">Due: {reminder.date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <Link href="/clients" className="text-blue-600 hover:underline">
          View Full Client List →
        </Link>
      </div>
    </div>
  );
}
