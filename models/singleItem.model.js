const mongoose = require('mongoose')

const singleItemScheme = new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  itemName: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  DateRegistered: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('singleItemScheme', singleItemScheme)