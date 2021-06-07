// require models 
// require router
const router = require('express').Router();
const mongoose = require('mongoose');
const Workout = require('../models/Workout');

// const { Exercise } = require('../models/Exercises');



// build out CRUD & endpoints

// viewers should be able to view the combined weight fromthe past seven workouts .sort().select()

// viewers should be able to the see the total duration of each workout from the past seven workouts

// can use different read methods to be able to see and sort the selected data

// additionally use aggregate functions





  // GET ALL
  router.get('/api/workouts', async (req, res) => {
    try {
      const workouts = await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
          }
        }
      ]);
      // workouts.forEach(workout => {
      //   let totalD = 0;
      //   workouts.exercises.forEach(e => {
      //     console.log(e);
      //     totalD += e.duration;
      //   });
      //   workout.totalDuration = totalD;
      // });

      res.status(200).json(workouts);

    } catch (err) {
      res.status(500).json(err);
    }
  });

// POST create a workout

router.post('/api/workouts', async ({ body }, res) => {
  try {
    const workout = await Workout.create(body);

    res.status(200).json(workout);



  } catch (err) {
    res.status(500).json(err);
  }
});


// GET range
router.get('/api/workouts/range', async (req, res) => {
  try {
    const workout = await Workout.aggregate([
      {
        $addFields: {
          duration: {$sum: "$exercises.duration"}
        }
      }
    ])
    .limit(7)
    .sort("day")
    // .select( "date", "exercises");

    res.status(200).json(workout);


  } catch (err) {
    res.status(500).json(err);
  }
});

// post range
router.post('/api/workouts/range', async ({ body }, res) => {
  try {
    const workout = await Workout.create(body);
  

    res.status(200).json(workout);



  } catch (err) {
    res.status(500).json(err);
  }
});



// PUT update a workout

router.put('/api/workouts/:id', async ({ body, params }, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(params.id, 
      {
        $push: { exercises: body }
      },
  
      {new: true });

      const result = await workout.save();
      console.log(result);

      res.status(200).json(workout);


  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;

























