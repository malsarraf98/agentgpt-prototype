export default function Performance() {
  const stats = {
    timeFrames: {
      "6 months": 9,
      "12 months": 22,
      "5 years": 61
    },
    avgDaysOnMarket: 14,
    overAsk: "68%",
    avgOverAsk: "4.2%",
    repeatClients: "42%",
    topZips: ["02138", "02472", "02446"],
    testimonial: "“Karen Li: best listing experience I’ve ever had.”"
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📊 Agent Performance Summary</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">🏡 Homes Sold</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {Object.entries(stats.timeFrames).map(([label, value]) => (
              <li key={label}>
                {label}: <strong>{value}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">📅 Avg. Days on Market</h2>
          <p className="text-2xl font-bold">{stats.avgDaysOnMarket} days</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">💰 % Over Ask</h2>
          <p className="text-sm mb-1">Sold over ask: <strong>{stats.overAsk}</strong></p>
          <p className="text-sm">Avg over asking: <strong>{stats.avgOverAsk}</strong></p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">👥 Repeat Clients</h2>
          <p className="text-2xl font-bold">{stats.repeatClients}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">🗺️ Top ZIP Codes</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {stats.topZips.map(zip => (
              <li key={zip}>{zip}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow col-span-1 sm:col-span-2">
          <h2 className="font-semibold text-lg mb-2">💬 Client Highlight</h2>
          <blockquote className="italic text-gray-600">{stats.testimonial}</blockquote>
        </div>
      </div>
    </div>
  );
}
