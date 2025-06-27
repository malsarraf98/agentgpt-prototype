import { useState } from "react";

export default function MarketSummary() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const res = await fetch("/api/market-summary", {
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
      <h1 className="text-2xl font-bold mb-4">Market Summary</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <textarea
          className="w-full p-3 border rounded shadow-sm"
          rows={4}
          placeholder="E.g. Q2 summary for Weston, MA"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Generating..." : "Get Market Summary"}
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
