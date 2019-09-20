const mongoose = require('mongoose');

const { Schema } = mongoose;

const actorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Actor', actorSchema);
