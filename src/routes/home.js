import express from 'express';
import home from '../api/home.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(home);
});

export default router;
