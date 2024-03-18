const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  // Handle requests for static files
  server.use('/static', express.static('static'));

  // You can add custom routing here if necessary

  // Default catch-all handler to allow Next.js to handle all other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
