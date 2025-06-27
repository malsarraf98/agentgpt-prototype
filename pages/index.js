import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="px-8 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">AgentGPT</h1>
        <nav className="space-x-6">
          <Link href="/upload" className="hover:underline">Try It</Link>
          <Link href="/market-summary" className="hover:underline">Demo</Link>
          <Link href="/buyer" className="hover:underline">Buyer GPT</Link>
        </nav>
      </header>

      <main className="px-8 py-20 max-w-5xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            The AI Workspace for Elite Real Estate Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            AgentGPT turns client calls, showings, and listing activity into structured summaries, comps, and follow-ups — instantly.
          </p>
        </section>

        <section className="mb-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">🧠 Smarter Client Notes</h3>
            <p className="text-gray-600">Upload a Zoom or phone call and get instant summaries, next steps, and a follow-up email.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">🏘️ AI-Generated Comps</h3>
            <p className="text-gray-600">Buyer or seller? AgentGPT pulls comps and insights for the exact scenario you're working on.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">📁 Client File History</h3>
            <p className="text-gray-600">Everything you’ve said or done with a client — organized in one place and AI-summarized.</p>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-4">👩‍💼 Example: Jessie in Wellesley</h3>
          <p className="text-gray-600 mb-4">
            Jessie’s a solo Compass agent who used to spend hours after each showing updating notes, emailing clients, and prepping comps.
            Now she drops in a Zoom recording — and AgentGPT sends her back everything she needs in minutes.
          </p>
        </section>

        <section className="mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">🎥 Demo Walkthrough</h3>
          <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded shadow">
            {/* Replace with actual embed or Loom video later */}
            <p className="text-gray-500 p-6">[Demo video coming soon]</p>
          </div>
          <Link href="/upload">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Try AgentGPT Now
            </button>
          </Link>
        </section>

        <section className="text-center max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2">📬 Join Our Early Access List</h3>
          <form action="https://formsubmit.co/max@useadvisorgpt.com" method="POST" className="space-y-4">
            <input type="hidden" name="_next" value="/thank-you.html" />
            <input type="text" name="name" placeholder="Name" required className="w-full border p-2 rounded" />
            <input type="email" name="email" placeholder="Email" required className="w-full border p-2 rounded" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Join Now
            </button>
          </form>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-400 py-6">
        © 2025 AgentGPT
      </footer>
    </div>
  );
}
