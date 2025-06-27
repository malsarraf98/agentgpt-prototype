import { useState, useEffect } from "react";

export default function Upload() {
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState(null);
  const [selectedClient, setSelectedClient] = useState("");
  const [status, setStatus] = useState("");
  const [clients, setClients] = useState([]);
  const [editableSummary, setEditableSummary] = useState("");
  const [showSaveButton, setShowSaveButton] = useState(false);

  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem("agentgpt-crm")) || [];
    setClients(storedClients);
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !selectedClient) {
      alert("Please select a file and client.");
      return;
    }

    setStatus("Processing...");

    // Simulate GPT summary generation
    setTimeout(() => {
      const mockSummary = `Call Summary: Discussed buyer's timeline, interest in 3-bed homes in Newton, and financing questions.`;

      setSummary(mockSummary);
      setEditableSummary(mockSummary);
      setShowSaveButton(true);
      setStatus("Summary generated. Review and save below.");
    }, 1500);
  };

  const handleSaveToClient = () => {
    const updatedClients = clients.map(client => {
      if (client.name === selectedClient) {
        return {
          ...client,
          history: [
            {
              date: new Date().toLocaleDateString(),
              summary: editableSummary
            },
            ...(client.history || [])
          ]
        };
      }
      return client;
    });

    setClients(updatedClients);
    localStorage.setItem("agentgpt-crm", JSON.stringify(updatedClients));
    setStatus("✅ Summary saved to client record.");
    setShowSaveButton(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload a Call Transcript</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Client</label>
        <select
          className="w-full border p-2 rounded"
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
        >
          <option value="">-- Choose a client --</option>
          {clients.map((client) => (
            <option key={client.name} value={client.name}>{client.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <input type="file" onChange={handleFileChange} className="border p-2" />
      </div>

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate Summary
      </button>

      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}

      {showSaveButton && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Review & Edit Summary</h2>
          <textarea
            value={editableSummary}
            onChange={(e) => setEditableSummary(e.target.value)}
            className="w-full border p-2 rounded h-32"
          />
          <button
            onClick={handleSaveToClient}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save to Client Record
          </button>
        </div>
      )}
    </div>
  );
}
