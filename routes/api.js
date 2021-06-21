// require models 
// require router
const router = require('express').Router();
const Workout = require('../models/Workout');



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

























