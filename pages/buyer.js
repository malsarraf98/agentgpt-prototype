import { useState } from "react";

export default function Buyer() {
  const [formData, setFormData] = useState({
    location: "",
    budget: "",
    type: ""
  });

  const [summary, setSummary] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated GPT-like summary
    setSummary({
      comps: [
        { address: "22 Elm St", price: "$1.48M", dom: 9, listDiff: "+3%" },
        { address: "88 Grove Ave", price: "$1.52M", dom: 6, listDiff: "+1%" },
        { address: "10 Appleton Rd", price: "$1.49M", dom: 11, listDiff: "+2%" },
        { address: "15 Beacon Way", price: "$1.46M", dom: 14, listDiff: "-1%" },
        { address: "5 Walnut Pl", price: "$1.55M", dom: 5, listDiff: "+5%" }
      ],
      summary: `Homes around $${formData.budget} in ${formData.location} are selling quickly (avg 9 days on market) and often above list price. Consider acting quickly once pre-approved.`,
      nextSteps: [
        "Book showings for the top 3 comps.",
        "Review recent inspection reports with clients.",
        "Start pre-approval process with recommended lender."
      ]
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Buyer Comps Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="location"
          placeholder="Town/City"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="budget"
          placeholder="Budget (e.g., 1500000)"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="type"
          placeholder="Property type (e.g., condo, single family)"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Generate Summary
        </button>
      </form>

      {summary && (
        <div className="mt-6 space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Comps</h2>
            <ul className="list-disc list-inside">
              {summary.comps.map((comp, idx) => (
                <li key={idx}>
                  {comp.address} – {comp.price} – {comp.dom} DOM – {comp.listDiff} vs list
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p>{summary.summary}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
            <ul className="list-disc list-inside">
              {summary.nextSteps.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
