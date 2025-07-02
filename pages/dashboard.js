import agentDeals from '../data/agent-data';

function calculateInsights(deals) {
  const totalDeals = deals.length;
  const avgDays = (deals.reduce((sum, d) => sum + d.daysOnMarket, 0) / totalDeals).toFixed(1);
  const overAskCount = deals.filter(d => d.overAsk).length;
  const repeatCount = deals.filter(d => d.repeatClient).length;

  const towns = {};
  deals.forEach(d => {
    towns[d.town] = (towns[d.town] || 0) + 1;
  });
  const topTowns = Object.entries(towns)
    .sort((a, b) => b[1] - a[1])
    .map(([town]) => town)
    .slice(0, 2);

  return {
    totalDeals,
    avgDays,
    overAskRate: `${Math.round((overAskCount / totalDeals) * 100)}%`,
    repeatRate: `${Math.round((repeatCount / totalDeals) * 100)}%`,
    topTowns
  };
}

export default function Dashboard() {
  const summary = calculateInsights(agentDeals);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Agent Performance Overview</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard label="Deals Closed" value={summary.totalDeals} />
        <StatCard label="Avg Days on Market" value={summary.avgDays} />
        <StatCard label="% Over Ask" value={summary.overAskRate} />
        <StatCard label="Repeat Clients" value={summary.repeatRate} />
        <StatCard label="Top Towns" value={summary.topTowns.join(", ")} />
      </div>

      <div className="p-4 bg-white shadow rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Summary</h2>
        <p>
          You've had a strong showing this year — closing {summary.totalDeals} deals with an average market time of {summary.avgDays} days. 
          {summary.repeatRate} of your clients were repeat clients, and most of your success is centered around {summary.topTowns.join(" and ")}.
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 text-center">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
