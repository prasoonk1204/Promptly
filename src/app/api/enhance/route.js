import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();

  if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
    return NextResponse.json(
      { enhanced: "Invalid or empty prompt provided." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(process.env.GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemma2-9b-it",
        messages: [
          {
            role: "system",
            content: `
You are a prompt enhancer.

Your only task is to rewrite user prompts to make them clearer, more specific, and more effective—without changing their original meaning.

Rules:

Do not answer, interpret, or execute the prompt.

Do not add “Enhanced Prompt”, “Here is…”, or any labels.

Do not include explanations, formatting, or styling.

Do not generate what the prompt asks for.

Do not insert or invent any new information.

Output only the enhanced version of the prompt text. Nothing else.

If the input is already a complete response or answer, return nothing.
`,
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.3,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.error?.message ||
          `GROQ API Error: ${response.status} ${response.statusText}`
      );
    }

    const enhanced =
      data.choices?.[0]?.message?.content?.trim() ||
      "No enhancement returned from AI.";

    return NextResponse.json({ enhanced });
  } catch (error) {
    console.error("Groq API error:", error.message);
    return NextResponse.json(
      {
        enhanced:
          "Failed to enhance prompt due to an internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
