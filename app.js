const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(process.env.PORT || 3000, () =>
  console.log(`app running on port ${process.env.PORT || 3000}`)
);
