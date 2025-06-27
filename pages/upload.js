import { useState, useEffect } from "react";

export default function Upload() {
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState(null);
  const [selectedClient, setSelectedClient] = useState("");
  const [status, setStatus] = useState("");
  const [clients, setClients] = useState([]);
  const [editableSummary, setEditableSummary] = useState("");
  const [nextStep, setNextStep] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [showSaveButton, setShowSaveButton] = useState(false);

  useEffect(() => {
    let storedClients = JSON.parse(localStorage.getItem("agentgpt-crm"));

    if (!storedClients || storedClients.length === 0) {
      storedClients = [
        {
          name: "John & Mary Li",
          type: "buyer",
          budget: "$1.5M",
          zip: "Newton, MA",
          history: [],
        },
        {
          name: "Susan Feld",
          type: "seller",
          property: "3BR condo in Brookline",
          goal: "List in July",
          history: [],
        },
      ];
      localStorage.setItem("agentgpt-crm", JSON.stringify(storedClients));
    }

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
          nextStep,
          dueDate,
          history: [
            {
              date: new Date().toLocaleDateString(),
              summary: editableSummary,
              nextStep,
              dueDate
            },
            ...(client.history || [])
          ]
        };
      }
      return client;
    });

    setClients(updatedClients);
    localStorage.setItem("agentgpt-crm", JSON.stringify(updatedClients));
    setStatus("✅ Summary + next step saved to client record.");
    setShowSaveButton(false);
    setNextStep("");
    setDueDate("");
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
        <div className="mt-6 bg-white p-4 rounded shadow space-y-4">
          <h2 className="text-xl font-bold mb-2">Review & Edit Summary</h2>

          <textarea
            value={editableSummary}
            onChange={(e) => setEditableSummary(e.target.value)}
            className="w-full border p-2 rounded h-32"
          />

          <div>
            <label className="block font-medium mb-1">Next Step</label>
            <input
              type="text"
              value={nextStep}
              onChange={(e) => setNextStep(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="e.g., Schedule tour, send new comps"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

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
