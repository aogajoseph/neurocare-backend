import config from '../api/config.js';

export default function configRoute(app) {
  app.get('/api/config', (req, res) => {
    res.json(config);
  });
}
