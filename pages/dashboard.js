import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [clients, setClients] = useState([]);
  const [today, setToday] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("agentgpt-crm")) || [];
    setClients(stored);

    const todayStr = new Date().toISOString().split("T")[0];
    setToday(todayStr);
  }, []);

  const totalClients = clients.length;
  const tasksDueToday = [];
  const allNextSteps = [];
  let completedCount = 0;

  clients.forEach((client) => {
    if (client.history && client.history.length > 0) {
      client.history.forEach((entry) => {
        if (entry.nextStep) {
          allNextSteps.push({
            name: client.name,
            step: entry.nextStep,
            due: entry.dueDate || "N/A",
          });
          if (entry.dueDate === today) tasksDueToday.push({ ...entry, name: client.name });
        }
      });
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
          <p className="text-3xl">{tasksDueToday.length}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Total Summaries</h2>
          <p className="text-3xl">{completedCount}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🔔 Next Steps Due Today</h2>
        {tasksDueToday.length === 0 ? (
          <p className="text-gray-600">No tasks due today.</p>
        ) : (
          <ul className="space-y-2">
            {tasksDueToday.map((task, idx) => (
              <li key={idx} className="bg-yellow-100 p-3 rounded">
                <p className="text-sm font-semibold">{task.name}</p>
                <p className="text-sm">{task.nextStep}</p>
                <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">📋 All Follow-Ups</h2>
        {allNextSteps.length === 0 ? (
          <p className="text-gray-600">No follow-up steps recorded yet.</p>
        ) : (
          <ul className="space-y-2">
            {allNextSteps.map((task, idx) => (
              <li key={idx} className="bg-gray-100 p-3 rounded">
                <p className="text-sm font-semibold">{task.name}</p>
                <p className="text-sm">{task.step}</p>
                <p className="text-xs text-gray-500">Due: {task.due}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8">
        <Link href="/clients" className="text-blue-600 hover:underline">
          View Full Client List →
        </Link>
      </div>
    </div>
  );
}
