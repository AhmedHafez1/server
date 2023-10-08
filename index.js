const express = require('express');
require('dotenv').config();
require('./models/User');
require('./services/passport');
const authRouter = require('./routes/authRoutes');
const connectMongo = require('./db/connect');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();
app.use(
  cookieSession({
    maxAge: 3 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/', (req, res) => res.send('Welcome to the APP'));
app.use('/auth', authRouter);

const PORT = process.env.PORT || 5000;
const start = async () => {
  await connectMongo();
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
};

start();
