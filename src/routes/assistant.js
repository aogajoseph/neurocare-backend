import express from 'express';
import { askAssistant } from '../apis/openai.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { input } = req.body;

    if (!input) {
      return res.status(400).json({ error: 'Input is required' });
    }

    const output = await askAssistant(input);

    res.json({ output });
  } catch (error) {
    console.error('Assistant route error:', error);
    res.status(500).json({ error: 'Assistant failed' });
  }
});

export default router;
