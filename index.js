const express = require('express');
require('dotenv').config();
require('./services/passport');
const authRouter = require('./routes/authRoutes');

const app = express();

// Routes
app.use('/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
