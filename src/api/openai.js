import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function askAssistant(userInput) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a Neuro Care Assistant...' },
      { role: 'user', content: userInput }
    ],
    temperature: 0.7,
    max_tokens: 200,
  });

  return response.choices[0].message.content;
}
