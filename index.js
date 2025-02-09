const express = require('express');
const itemsRouter = require('./routes/items');
const rateLimiter = require('./middlewares/rateLimiter');
const authMiddleware = require('./middlewares/auth');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(rateLimiter);

app.get('/', (req, res) => {
  res.send('Welcome to the Street Style Store API!');
});

app.use('/api', authMiddleware, itemsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
