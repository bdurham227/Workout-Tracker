const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const router = require('./routes/workout-routes');

const app = express();
const PORT = process.env.PORT || 3002;


// mongoose connection
mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => console.log('Connected to MongoDb!'))
.catch(err => console.error('Erorr connecting to MongoDb', err));




// middleware & bodyparsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require('./routes/html-routes')(app);
app.use(router);
// require('./routes/workout-routes')(app);




app.listen(PORT, () => {
  console.log(`Now Listening on port ${PORT}`);
});