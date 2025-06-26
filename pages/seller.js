import { useState } from "react";

export default function Seller() {
  const [formData, setFormData] = useState({
    location: "",
    bedrooms: "",
    bathrooms: "",
    condition: ""
  });

  const [summary, setSummary] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSummary({
      comps: [
        { address: "12 Pine Rd", price: "$1.45M", dom: 10, listDiff: "+2%" },
        { address: "3 Chestnut Ln", price: "$1.52M", dom: 8, listDiff: "+4%" },
        { address: "99 Oak St", price: "$1.49M", dom: 12, listDiff: "+1%" },
        { address: "7 Birch Ave", price: "$1.43M", dom: 15, listDiff: "-1%" },
        { address: "20 Maple Cir", price: "$1.47M", dom: 9, listDiff: "+3%" }
      ],
      strategy: `In ${formData.location}, similar ${formData.bedrooms}-bed homes are selling quickly, especially if in good condition. If the home is ${formData.condition}, pricing it at $1.49M would attract competitive offers within 10 days.`,
      prep: [
        "Deep clean and declutter main rooms",
        "Paint touch-up in high-traffic areas",
        "Stage primary bedroom and living room",
        "Hire pro photographer before listing"
      ]
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Seller Strategy Tool</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="location"
          placeholder="Town/City"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="bedrooms"
          placeholder="Bedrooms"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="bathrooms"
          placeholder="Bathrooms"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="condition"
          placeholder="Condition (excellent, fair, dated)"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Generate Strategy
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
            <h2 className="text-xl font-semibold mb-2">Strategy</h2>
            <p>{summary.strategy}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Prep Recommendations</h2>
            <ul className="list-disc list-inside">
              {summary.prep.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
