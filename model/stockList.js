const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

const Model = mongoose.model(
  'StockList', // all stock no and name
  new Schema({
    stockNo: String,
    stockName: String,
    updateDate: String,
  })
);

module.exports = Model;
