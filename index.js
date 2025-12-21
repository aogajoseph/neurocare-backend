import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import assistantRoutes from './routes/assistant.js';

const app = express();

app.use(cors());
app.use(express.json());

// Assistant API
app.use('/api/assistant', assistantRoutes);

// Health check (very useful on Render)
app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🧠 NeuroCare backend running on port ${PORT}`);
});
