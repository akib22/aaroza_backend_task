const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }]
});

module.exports = mongoose.model('Movie', movieSchema);
