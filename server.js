const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;


// mongoose connection
mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
.then(() => console.log('Connected to MongoDb!'))
.catch(err => console.error('Erorr connecting to MongoDb', err));




// middleware & bodyparsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(PORT, () => {
  console.log(`Now Listening on port ${PORT}`);
});