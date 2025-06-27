export default async function handler(req, res) {
  const { prompt } = req.body;

  const fullPrompt = `
Act as a real estate comps analyst helping a listing agent prep a listing strategy.

Client description: ${prompt}

1. Summarize what this seller is likely listing and why.
2. Show 5 similar properties that sold recently — include price, DOM, list vs sale, beds/baths, neighborhood.
3. Give a market insights section: is it hot or cold right now? Over/under ask trends?

Format clearly. Agent should be able to copy/paste this into a seller email.
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
