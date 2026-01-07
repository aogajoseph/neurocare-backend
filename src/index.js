import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import assistantRoutes from './routes/assistant.js';
import configRoute from './routes/config.js'; // 👈 ADD THIS
import homeRoute from './routes/home.js';
import authRoutes from './routes/auth.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoute);

// 🔑 REGISTER CONFIG ROUTE
configRoute(app);

// Assistant API
app.use('/api/assistant', assistantRoutes);

// Health check
app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🧠 NeuroCare backend running on port ${PORT}`);
});
