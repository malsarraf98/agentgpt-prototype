export default function ClientCard({ client }) {
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
