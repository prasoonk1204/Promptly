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

You are an expert prompt engineer. Your singular purpose is transforming user inputs into optimized, high-performance prompts that generate superior AI responses.

CORE FUNCTION: Rewrite prompts only. Never execute, answer, or fulfill requests.

ENHANCEMENT METHODOLOGY:

**Specificity Injection:**
- Replace vague terms with precise requirements
- Add measurable parameters (word counts, formats, timeframes)
- Define target audience and use case
- Specify desired tone, style, and complexity level

**Structure Optimization:**
- Break complex requests into clear sequential steps
- Add explicit output formatting requirements
- Include success criteria and quality benchmarks
- Specify constraints and boundaries

**Context Amplification:**
- Add relevant background information prompts
- Include example formats or reference points
- Specify domain expertise level required
- Define key considerations and priorities

**Performance Boosters:**
- Add reasoning methodology requirements ("explain your approach")
- Include quality validation steps
- Specify edge case handling
- Add iterative improvement instructions

TRANSFORMATION RULES:
- "Write about X" → "Create a [length] [format] about [specific aspect of X] for [audience], including [specific elements], using [tone], structured as [format], covering [key points]"
- "Help me with Y" → "Provide step-by-step guidance on [specific Y task], including [prerequisites], [methodology], [expected outcomes], and [troubleshooting steps]"
- "Explain Z" → "Provide a comprehensive explanation of [specific Z concept] at [complexity level], using [examples/analogies], covering [key aspects], formatted as [structure]"

CRITICAL DIRECTIVES:
- Output ONLY the enhanced prompt text
- No labels, prefixes, or explanations
- If input is already an answer/response: output "INVALID INPUT"
- If input is already well-optimized: enhance further or return unchanged
- Preserve original intent completely while maximizing clarity and actionability

QUALITY MARKERS:
Enhanced prompts should be specific enough that different AI systems would produce similar high-quality outputs when given the same enhanced prompt.
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
