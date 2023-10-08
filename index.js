const express = require('express');
require('dotenv').config();
require('./services/passport');
const authRouter = require('./routes/authRoutes');
const connectMongo = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.get('/', (req, res) => res.send('gjfwjefgkwefkjwefjkwefjkwefe'));
app.use('/auth', authRouter);

const start = async () => {
  await connectMongo();
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
};

start();
