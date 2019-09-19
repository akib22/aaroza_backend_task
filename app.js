const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const pageNotFound = require('./middlewares/404');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
