const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const stockModel = require('./model/stockList');
dotenv.config(); // get config vars

const MONGODB_URI = process.env.MONGODB_URI;

const port = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI).then(() => {
  console.log('MongoDB Connected!');
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
