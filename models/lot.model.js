const mongoose = require('mongoose')
const singleItemModel = require('./singleItem.model')

const lotSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  numOfItems: {
    type: Number,
    required: true
  },
  DateRegistered: {
    type: Date,
    required: true,
    default: Date.now
  },
  items : [singleItemModel]
})

module.exports = mongoose.model('lot', lotSchema)