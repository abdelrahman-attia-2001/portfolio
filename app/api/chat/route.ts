import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();
  const lowerMsg = message.toLowerCase();

  // 🧠 Step 1: simple check if the message is related to recycling
  const keywords = [
    "recycling",
    "recycle",
    "waste",
    "environment",
    "plastic",
    "paper",
    "glass",
    "metal",
    "sustainability",
    "eco",
    "green",
    "تدوير",
    "البيئة",
    "بلاستيك",
    "زجاج",
    "ورق",
    "معادن",
    "نفايات",
  ];

  const isRelated = keywords.some((word) => lowerMsg.includes(word));

  // 🧩 Step 2: If not related, return suggested topics instead of using OpenAI
  if (!isRelated) {
    const suggestions = [
      "فوائد إعادة التدوير",
      "كيفية إعادة تدوير البلاستيك",
      "طرق الاستفادة من النفايات المنزلية",
      "مشروعات مبتكرة في مجال إعادة التدوير",
      "إعادة استخدام الزجاج أو الورق أو المعادن",
    ];

    const reply =
      "أنا متخصص في إعادة التدوير فقط 🌱.\n" +
      "ممكن تسألني عن أحد المواضيع دي مثلاً:\n" +
      suggestions.map((s) => `• ${s}`).join("\n");

    return NextResponse.json({ reply });
  }

  // 🤖 Step 3: If related, ask OpenAI for the answer
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are an intelligent chatbot specialized only in recycling and environmental awareness. Do not discuss any topics unrelated to recycling. Speak in a simple and engaging way, explaining how recycling works, its benefits, and ideas for eco-friendly projects.",
      },
      { role: "user", content: message },
    ],
  });

  const reply = completion.choices[0].message.content;
  return NextResponse.json({ reply });
}
