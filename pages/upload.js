import { useState } from "react";

export default function Upload() {
  const [summary, setSummary] = useState("");
  const [email, setEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [nextStep, setNextStep] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    setLoading(true);

    const text = await file.text();

    // Send to GPT to generate summary and follow-up suggestion
    const gptResponse = await fetch("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transcript: text })
    });

    const { summary, suggestedNextStep, suggestedDueDate } = await gptResponse.json();

    setSummary(summary);
    setNextStep(suggestedNextStep || "");
    setDueDate(suggestedDueDate || "");
    setLoading(false);
  };

  const handleSave = () => {
    if (!clientName || !summary) return alert("Client name and summary required");

    const stored = JSON.parse(localStorage.getItem("agentgpt-crm")) || [];
    const existing = stored.find((c) => c.name === clientName);

    const newEntry = {
      summary,
      nextStep,
      dueDate,
      date: new Date().toISOString().split("T")[0],
    };

    if (existing) {
      existing.history.push(newEntry);
    } else {
      stored.push({ name: clientName, email, history: [newEntry] });
    }

    localStorage.setItem("agentgpt-crm", JSON.stringify(stored));
    alert("Saved to CRM");
    setClientName("");
    setEmail("");
    setNextStep("");
    setDueDate("");
    setSummary("");
    setFileName("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload Transcript</h1>

      <input type="file" accept=".txt" onChange={handleFile} className="mb-4" />
      {fileName && <p className="text-sm text-gray-600">{fileName} selected</p>}

      {loading && <p>Analyzing transcript with GPT...</p>}

      {!loading && summary && (
        <>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={8}
            className="w-full p-2 border rounded mb-4"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              placeholder="Client Name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              placeholder="Client Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded"
            />
          </div>

          <input
            placeholder="Next Step"
            value={nextStep}
            onChange={(e) => setNextStep(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save to CRM
          </button>
        </>
      )}
    </div>
  );
}
