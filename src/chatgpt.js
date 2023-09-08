import OpenAI from 'openai';
import 'dotenv/config';

const CHATGPT_MODEL = 'gpt-3.5-turbo';

const ROLES = {
  ASSISTANT: 'assistant',
  SYSTEM: 'system',
  USER: 'user',
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getMessage = (m) => `
  Write a coherent emotional story based on these theses: ${m}

 It is necessary to end up with a small article ещ tell my friends. The text should not be more than 100 words. The key is to have the correct sequence and consider the context.
`

export async function chatGPT(message = '') {
  const messages = [
    {
      role: ROLES.SYSTEM,
      content:
        'You are an experienced copywriter who writes short, emotional articles for social media.',
    },
    { role: ROLES.USER, content: getMessage(message) },
  ]
  try {
    const completion = await openai.chat.completions.create({
      messages,
      model: CHATGPT_MODEL,
    })

    return completion.choices[0].message;
  } catch (e) {
    console.error('Error while chat completion', e.message)
  }
}
