const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: {
    type: new mongoose.Schema({
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
    })
  },
  totalDuration: {
    type: Number,
    default: 0,
  }
});

const Workout = mongoose.model('Workout', workoutSchema);

exports.Workout = Workout;

// embedd or use reference method to finish building out this model