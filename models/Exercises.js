const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
     trim: true,
  },
  duration: {
    type: Number,
    min: 0,
    required: true,
  },
  weight: {
    type: Number,
    min: 0,
  },
  reps: {
    type: Number,
    min: 0,
  },
  sets: {
    type: Number,
    min: 0,
  }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

exports.Exercise = Exercise;