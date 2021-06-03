// require path 
const path = require('path');


// 1. ) build path to send index.html to its endpoint

// 2.) build path to send workout.html to its endpoint


// 3.) build path to send stats.html to its endpoint

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });

  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  })




};