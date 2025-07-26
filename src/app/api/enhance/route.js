import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();

  try {
    const response = await fetch(process.env.GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `You are a prompt enhancer.
Given a user's raw prompt, rewrite it to be clearer, more specific, and effective for a language model to respond to.

Important rules:
- Return only the enhanced prompt, without adding "Enhanced Prompt", "Output:", markdown formatting, or any explanation.
- The output must contain only the revised prompt content.`,
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error?.message || "GROQ API Error");
    }

    const enhanced =
      data.choices?.[0]?.message?.content?.trim() || "No enhancement returned.";

    return NextResponse.json({ enhanced });
  } catch (error) {
    console.error("Groq API error:", error.message);
    return NextResponse.json(
      { enhanced: "Failed to enhance prompt. Please try again later." },
      { status: 500 }
    );
  }
}
