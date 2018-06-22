const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './src/pages' });
const server = express();

app.prepare()
  .then(() => {
    server.get('*', (req, res) =>
      app.render(req, res, '/candidates', { ...req.params, ...req.query }));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });