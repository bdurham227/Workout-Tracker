// require models 
// require router
const router = require('express').Router();
const Workout = require('../../models/Workout');



  // GET ALL
  router.get('/', async (req, res) => {
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
router.get('/range', async (req, res) => {
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

router.post('/', async (req, res) => {
  try {
    const workout = await Workout.create(req.body);

    res.status(200).json(workout);

  } catch (err) {
    res.status(500).json(err);
  }
});



// post range
// router.post('/api/workouts/range', async (req, res) => {
//   try {
//     const workout = await Workout.create(req.body);
  

//     res.status(200).json(workout);



//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// PUT update a workout

router.put('/:id', async (req, res) => {
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


module.exports = router;

























