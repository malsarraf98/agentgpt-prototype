import { useState } from "react";

export default function Upload() {
  const [summary, setSummary] = useState(null);

  const handleUpload = () => {
    // Mock summary for now — replace with actual GPT output later
    setSummary({
      clientType: "Buyer",
      profile: "Young couple looking for a starter home in Newton around $1.5M.",
      timeline: "Looking to purchase within 3–6 months.",
      actionItems: [
        "Send 5 recent comps under $1.6M in Newton.",
        "Schedule follow-up call for next week.",
        "Discuss lender pre-approval process."
      ],
      nextMeeting: "Next call: Friday at 10 AM to review comps and financing."
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload Call Transcript</h1>
      <p className="mb-4">Upload a Zoom/phone transcript to generate a client summary.</p>
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Simulate Upload
      </button>

      {summary && (
        <div className="mt-6 border p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Client Summary</h2>
          <p><strong>Type:</strong> {summary.clientType}</p>
          <p><strong>Profile:</strong> {summary.profile}</p>
          <p><strong>Timeline:</strong> {summary.timeline}</p>
          <p className="mt-2 font-semibold">Action Items:</p>
          <ul className="list-disc list-inside">
            {summary.actionItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="mt-2"><strong>Next Meeting:</strong> {summary.nextMeeting}</p>
        </div>
      )}
    </div>
  );
}
