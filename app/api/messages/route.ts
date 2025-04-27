import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        const { user_input } = await req.json();

        const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
            role: "system",
            content: "You are EternalPeaseBot, a funeral service inquiry assistant. You must only answer questions related to funeral services with sympathy and professionalism.",
            },
            {
            role: "user",
            content: user_input,
            },
        ],
        });

        const ai_response = completion.choices[0].message.content;
        return NextResponse.json({ ai_response });
    } catch (error: unknown) {
        console.error("OpenAI Error:", error);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
