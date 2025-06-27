import { useState } from "react";

const mockClients = ["John & Mary Thompson", "Karen Li"];

export default function Upload() {
  const [selectedClient, setSelectedClient] = useState("");
  const [transcript, setTranscript] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedClient && transcript) {
      // Simulate saving it somewhere
      console.log("Saved:", { selectedClient, transcript });
      setSubmitted(true);
      setTranscript("");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload Meeting Summary</h1>

      <div className="bg-white p-6 rounded shadow max-w-xl">
        <label className="block mb-2 font-medium">Assign to Client</label>
        <select
          className="w-full border rounded p-2 mb-4"
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
        >
          <option value="">Select client</option>
          {mockClients.map((name, idx) => (
            <option key={idx} value={name}>{name}</option>
          ))}
        </select>

        <label className="block mb-2 font-medium">Paste Transcript or Summary</label>
        <textarea
          className="w-full border rounded p-2 mb-4"
          rows={5}
          placeholder="Paste transcript here..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />

        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          onClick={handleSubmit}
        >
          Save Summary
        </button>

        {submitted && (
          <div className="mt-4 text-green-600">
            Summary saved for <strong>{selectedClient}</strong>!
          </div>
        )}
      </div>
    </div>
  );
}
