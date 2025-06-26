import { useState } from "react";

export default function MarketSummary() {
  const [formData, setFormData] = useState({
    town: "",
    quarter: ""
  });

  const [summary, setSummary] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSummary({
      stats: {
        totalSales: 112,
        medianPrice: "$1.43M",
        medianDOM: 8,
        overAsk: "64%"
      },
      commentary: `In Q${formData.quarter}, ${formData.town} saw strong demand with 64% of homes selling above asking. Inventory remains low, keeping competition high. The median sale price climbed slightly while time on market dropped to just 8 days.`
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quarterly Market Summary</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="town"
          placeholder="Town (e.g., Newton)"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="quarter"
          placeholder="Quarter (1, 2, 3, 4)"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Generate Summary
        </button>
      </form>

      {summary && (
        <div className="mt-6 space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Stats</h2>
            <ul className="list-disc list-inside">
              <li>Total Sales: {summary.stats.totalSales}</li>
              <li>Median Sale Price: {summary.stats.medianPrice}</li>
              <li>Median Days on Market: {summary.stats.medianDOM}</li>
              <li>% Over Ask: {summary.stats.overAsk}</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Market Commentary</h2>
            <p>{summary.commentary}</p>
          </div>
        </div>
      )}
    </div>
  );
}
