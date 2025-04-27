import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { user_input } = await req.json();

    // Load EternalPease data
    const dataPath = path.join(process.cwd(), 'eternalpease_data.json');
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    const eternalData = JSON.parse(jsonData);

    const eternalPeaseContext = `
Business Info:
${eternalData.businessInfo}

Services:
${eternalData.services.map((s: string) => `- ${s}`).join('\n')}

FAQs:
${eternalData.faqs.map((f: { question: string; answer: string }) => `Q: ${f.question}\n${f.answer}`).join('\n\n')}

Contact Info:
${eternalData.contactInfo}

Note:
You are an AI assistant trained only to answer questions about EternalpEASE. Kindly decline anything else.
`;

    // Generate AI response
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are EternalPeaseBot, an assistant that only answers questions related to the EternalPease business but with sympathy since you,ll be answering to the grieving once. If the user asks about anything unrelated, politely decline and redirect them to topics about EternalPease. Reply in Filipino or Taglish unless the input is fully in English.',
        },
        {
          role: 'user',
          content: `Context:\n${eternalPeaseContext}\n\nUser Question:\n${user_input}`,
        },
      ],
    });

    const ai_response = completion.choices[0].message.content;

    // Save to Supabase
    const { data, error } = await supabase
      .from('messages')
      .insert([{ user_input, ai_response }])
      .select();

    if (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to save to Supabase' }, { status: 500 });
    }

    return NextResponse.json({ ai_response: data[0].ai_response });
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
