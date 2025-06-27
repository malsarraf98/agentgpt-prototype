import { useState } from "react";

export default function Buyer() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [gptResponse, setGptResponse] = useState("");

  const handleSubmit = async () => {
    if (!input) return;
    setLoading(true);

    const res = await fetch("/api/buyer-comps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    setGptResponse(data.result);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Buyer Comp Engine</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        placeholder="Example: Young couple looking for a starter home around $1.5M in Newton..."
        className="w-full p-2 border rounded mb-4"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Generating..." : "Analyze with GPT"}
      </button>

      {gptResponse && (
        <div className="mt-6 bg-gray-50 p-4 border rounded whitespace-pre-wrap">
          <h2 className="text-lg font-semibold mb-2">🧠 GPT Response:</h2>
          {gptResponse}
        </div>
      )}
    </div>
  );
}
