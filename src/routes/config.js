import config from '../apis/config.js';

export default function configRoute(app) {
  app.get('/api/config', (req, res) => {
    res.json(config);
  });
}
