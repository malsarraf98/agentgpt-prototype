export default async function handler(req, res) {
  const { prompt } = req.body;

  const fullPrompt = `
Act as a hyper-local real estate market analyst.

Create a professional market update based on this prompt: "${prompt}"

1. Start with a 1-paragraph high-level summary of sales activity
2. Include 3–5 bullet points with stats like average days on market, sale price trends, % over ask, and inventory
3. Add a quick note on whether it's a buyer's or seller's market

Make it clean and concise — ready to drop in a seller update or social media post.
  `;

  const completion = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: fullPrompt }],
    }),
  });

  const json = await completion.json();
  const result = json.choices?.[0]?.message?.content || "No response.";

  res.status(200).json({ result });
}
