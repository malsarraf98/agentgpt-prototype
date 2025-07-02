import { useState } from 'react';

export default function ClientCard({ client }) {
  const [tag, setTag] = useState(client.tag || '');
  const [notes, setNotes] = useState(client.notes || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // This is mock logic; in real app it would persist to DB
    console.log('Saved:', { tag, notes });
    setIsEditing(false);export default function ClientCard({ client }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{client.name}</h2>
        <span className="text-sm text-gray-500">{client.date}</span>
      </div>

      <div className="text-sm text-gray-700">{client.summary}</div>

      <div className="flex flex-wrap gap-2 text-sm mt-2">
        {client.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

  };

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="text-xl font-semibold mb-1">{client.name}</h2>
      <p className="text-gray-500 mb-2">{client.email}</p>

      {isEditing ? (
        <>
          <input
            className="border p-1 rounded mb-2 w-full"
            placeholder="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <textarea
            className="border p-2 rounded w-full h-20"
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p className="text-sm mb-1"><strong>Tag:</strong> {tag || 'None'}</p>
          <p className="text-sm text-gray-700 whitespace-pre-line">
            <strong>Notes:</strong> {notes || 'No notes yet.'}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 px-3 py-1 bg-gray-200 rounded"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}
