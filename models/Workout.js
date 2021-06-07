const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
  {
      type: {
        type: String,
       
      },
      name: {
        type: String,
       
      },
      duration: {
        type: Number,
      
      },
      distance: {
        type: Number,
        
      },
      weight: {
        type: Number,
        
      },
      reps: {
        type: Number,
        
      },
      sets: {
        type: Number,
        
      }
  },
],
totalDuration: {
  type: Number,
  default: 0,
}

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

// embedd or use reference method to finish building out this model