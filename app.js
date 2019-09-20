const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// local dependencies
const pageNotFound = require('./middlewares/404');
const errorHandler = require('./middlewares/error-handler');
const publicRoute = require('./routes/publicRoutes');
const authRoute = require('./routes/authRoutes');
const adminRoute = require('./routes/adminRoutes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// public routes
app.use('/api', publicRoute);

// auth routes
app.use('/api/user', authRoute);

// admin routes
app.use('/api/admin', adminRoute);

// page not found or 404 middleware
app.use(pageNotFound);

// server error or 500 middleware
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_DB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(process.env.PORT || 3000, () =>
      console.log(`app running on port ${process.env.PORT || 3000}`)
    );
  })
  .catch(err => console.log(err));
