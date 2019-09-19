const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// local dependencies
const pageNotFound = require('./middlewares/404');
const publicRoute = require('./routes/publicRoutes');
const authRoute = require('./routes/authRoutes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// public routes
app.use('/api', publicRoute);

// auth routes
app.use('/api/user', authRoute);

// page not found or 404 middleware
app.use(pageNotFound);

mongoose
  .connect(process.env.MONGO_DB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(process.env.PORT || 3000, () =>
      console.log(`app running on port ${process.env.PORT || 3000}`)
    );
  })
  .catch(err => console.log(err));
