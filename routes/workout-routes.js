// require models 
// require router
const mongoose = require('mongoose');
const { Workout } = require('../models/Workout');
const { Exercise } = require('../models/Exercises');



// build out CRUD & endpoints

// viewers should be able to view the combined weight fromthe past seven workouts .sort().select()

// viewers should be able to the see the total duration of each workout from the past seven workouts

// can use different read methods to be able to see and sort the selected data

// additionally use aggregate functions



module.exports = (app) => {

  // GET ALL
  app.get('/api/workouts', async (req, res) => {
    try {} catch (err) {
      res.status(500).json(err);
    }
  });

// POST create a workout

app.post('/api/workouts', async (req, res) => {
  try {} catch (err) {
    res.status(500).json(err);
  }
});




// GET range
app.get('/api/workouts/range', async (req, res) => {
  try {} catch (err) {
    res.status(500).json(err);
  }
});

// post range
app.post('/api/workouts/range', async (req, res) => {
  try {} catch (err) {
    res.status(500).json(err);
  }
});



// PUT update a workout

app.put('/api/workouts/:id', async (req, res) => {
  try {} catch (err) {
    res.status(500).json(err);
  }
});







}

















