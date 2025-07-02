import { useState } from 'react';

export default function ClientCard({ client }) {
  const [tag, setTag] = useState(client.tags?.[0] || '');
  const [notes, setNotes] = useState(client.notes || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    console.log('Saved:', { tag, notes });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{client.name}</h2>
        <span className="text-sm text-gray-500">{client.date}</span>
      </div>

      <div className="text-sm text-gray-700">{client.summary}</div>

      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Add tag"
            className="w-full px-3 py-1 border border-gray-300 rounded"
          />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2 text-sm">
            {tag && (
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                {tag}
              </span>
            )}
          </div>
          {notes && <p className="text-sm text-gray-600">{notes}</p>}
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm text-blue-600 hover:underline"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
