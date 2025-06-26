import { useState } from "react";

export default function AgentStats() {
  const [summary, setSummary] = useState(null);

  const handleSimulate = () => {
    setSummary({
      totalSales: 47,
      avgDOM: 11,
      overAskPercent: "61%",
      repeatClients: "28%",
      volume: "$54.2M",
      highlight: "You closed 18 deals in the last 6 months with an average of 7 days on market — 74% sold above ask."
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Agent Performance Dashboard</h1>
      <p className="mb-4">Eventually this page will let agents upload a CSV of their sold listings.</p>
      <button
        onClick={handleSimulate}
        className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
      >
        Simulate Agent Upload
      </button>

      {summary && (
        <div className="mt-6 space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Key Metrics</h2>
            <ul className="list-disc list-inside">
              <li>Total Sales: {summary.totalSales}</li>
              <li>Total Volume: {summary.volume}</li>
              <li>Average Days on Market: {summary.avgDOM}</li>
              <li>% Sold Over Ask: {summary.overAskPercent}</li>
              <li>Repeat Clients: {summary.repeatClients}</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p>{summary.highlight}</p>
          </div>
        </div>
      )}
    </div>
  );
}
