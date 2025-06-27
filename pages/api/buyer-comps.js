export default async function handler(req, res) {
  const { prompt } = req.body;

  const fullPrompt = `
Act as a real estate analyst helping an agent prep comps for a buyer. 

Client description: ${prompt}

1. Based on this, describe what the buyer wants in 1 paragraph.
2. Mock 5 comparable homes that sold in the last 90 days (location, beds/baths, sale price, list price, DOM).
3. Summarize key market insights: average days on market, % over/under ask, etc.

Keep it concise but insightful.
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
