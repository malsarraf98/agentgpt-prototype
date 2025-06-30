// pages/demo.tsx
import { useState } from 'react'

const mockClients = [
  {
    id: '1',
    name: 'Jane Doe',
    tags: ['hot lead', '3BR buyer'],
    notes: 'Likes the beach. Wants to move by August.',
    summary: 'Jane is looking for a 3-bedroom home in Naples under $800K. Prefers coastal neighborhoods. Concerned about flood zones.',
    followUpEmail: `Hi Jane,\n\nIt was great speaking with you! Based on our conversation, I’ll line up 3-bedroom homes in Naples near the coast and outside flood zones. Let’s plan to reconnect next Tuesday at 2pm.\n\nBest,\nAgent`,
    nextMeeting: 'Next Tuesday @ 2PM — Home criteria review and listings preview.',
  },
  {
    id: '2',
    name: 'John Smith',
    tags: ['investor'],
    notes: 'Wants high cap rate properties.',
    summary: 'John is seeking multi-family investment properties with 8%+ cap rates. Prefers Fort Myers.',
    followUpEmail: `Hi John,\n\nI’ve begun gathering multi-family properties with strong returns in Fort Myers. I’ll follow up with a list this Friday.\n\nBest,\nAgent`,
    nextMeeting: 'Friday @ 11AM — Investment property walkthrough',
  },
]

export default function Demo() {
  const [clients, setClients] = useState(mockClients)
  const [selectedId, setSelectedId] = useState('1')

  const selected = clients.find(c => c.id === selectedId)

  const updateClient = (id: string, updates: Partial<typeof selected>) => {
    setClients(clients.map(c => (c.id === id ? { ...c, ...updates } : c)))
  }

  const addTag = (tag: string) => {
    if (!selected) return
    if (!selected.tags.includes(tag)) {
      updateClient(selected.id, { tags: [...selected.tags, tag] })
    }
  }

  const removeTag = (tag: string) => {
    if (!selected) return
    updateClient(selected.id, { tags: selected.tags.filter(t => t !== tag) })
  }

  return (
    <div className="flex h-screen font-sans text-gray-800">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r p-4">
        <h2 className="text-lg font-semibold mb-4">Clients</h2>
        {clients.map(client => (
          <div
            key={client.id}
            className={`p-2 rounded cursor-pointer ${
              selectedId === client.id ? 'bg-white shadow' : 'hover:bg-gray-200'
            }`}
            onClick={() => setSelectedId(client.id)}
          >
            {client.name}
          </div>
        ))}
      </div>

      {/* Main Panel */}
      <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-white">
        <h1 className="text-2xl font-bold">{selected?.name}</h1>

        {/* Tags */}
        <div>
          <h3 className="text-sm text-gray-500 font-medium mb-1">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {selected?.tags.map(tag => (
              <span
                key={tag}
                onClick={() => removeTag(tag)}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
              >
                {tag} ×
              </span>
            ))}
            <input
              className="border px-2 py-1 text-sm rounded"
              placeholder="Add tag"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                  addTag(e.currentTarget.value.trim())
                  e.currentTarget.value = ''
                }
              }}
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <h3 className="text-sm text-gray-500 font-medium mb-1">Notes</h3>
          <textarea
            className="w-full border rounded p-2 text-sm"
            rows={4}
            value={selected?.notes}
            onChange={(e) => updateClient(selected!.id, { notes: e.target.value })}
          />
        </div>

        {/* Summary */}
        <div className="bg-gray-50 border rounded p-4">
          <h3 className="text-sm text-gray-500 font-medium mb-2">Transcript Summary</h3>
          <p className="text-sm whitespace-pre-wrap">{selected?.summary}</p>
        </div>

        {/* Follow-Up Email */}
        <div className="bg-gray-50 border rounded p-4">
          <h3 className="text-sm text-gray-500 font-medium mb-2">Follow-Up Email Draft</h3>
          <pre className="text-sm whitespace-pre-wrap font-mono">{selected?.followUpEmail}</pre>
        </div>

        {/* Next Meeting */}
        <div className="bg-gray-50 border rounded p-4">
          <h3 className="text-sm text-gray-500 font-medium mb-2">Next Meeting</h3>
          <p className="text-sm">{selected?.nextMeeting}</p>
        </div>
      </div>
    </div>
  )
}
