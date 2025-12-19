// neurocare-backend/api/assistant.js
import 'dotenv/config';
import { askAssistant } from './openai.js';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { input } = req.body;
    if (!input) return res.status(400).json({ error: 'Input is required' });

    const output = await askAssistant(input);
    res.status(200).json({ output });
  } catch (error) {
    console.error('Assistant error:', error);
    res.status(500).json({ error: 'Assistant failed' });
  }
}
