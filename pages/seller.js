import { useState } from "react";

export default function SellerComps() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const res = await fetch("/api/seller-comps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Seller Comp Tool</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <textarea
          className="w-full p-3 border rounded shadow-sm"
          rows={4}
          placeholder="Describe the seller (e.g. Couple downsizing from 4-bed in Needham this fall)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Generating..." : "Get Seller Comps"}
        </button>
      </form>

      {result && (
        <div className="bg-white p-4 rounded shadow whitespace-pre-wrap border">
          {result}
        </div>
      )}
    </>
  );
}
