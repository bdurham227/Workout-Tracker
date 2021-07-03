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
          },
        },
      ]);
    

      res.status(200).json(workouts);

    } catch (err) {
      res.status(500).json(err);
    }
  });




  // GET range
router.get('/api/range', async (req, res) => {
  try {
    const workout = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      }
    ])
    .limit(7)
    .sort({ day: 1 })
    // .select( "date", "exercises");

    res.status(200).json(workout);


  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a workout

router.post('/api/workouts', async (req, res) => {
  try {
    const workout = await Workout.create(req.body);

    res.status(200).json(workout);

  } catch (err) {
    res.status(500).json(err);
  }
});



// PUT update a workout

router.put('/api/workouts/:id', async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, 
      {
        $push: { exercises: req.body }
      },
  
      {  new: true,
      runValidators: true });

      // const result = await workout.save();
      // console.log(result);

      res.status(200).json(workout);


  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/api/workouts/:id', async (req, res) => {
  try {
    const workout = await Workout.findByIdAndRemove(req.params.id);

    if (!workout) res.status(400).json({ message: "No Workout with the given ID found"});

    res.status(200).json(workout);


  } catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;

























