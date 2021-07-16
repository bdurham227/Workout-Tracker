const mongoose = require('mongoose');
const express = require('express');
const db = require('./config/keys').MONGODB_URI;

const app = express();
const PORT = process.env.PORT || 3002;


// mongoose connection
// mongoose.connect(
//   db,
//   process.env.MONGODB_URI || 'mongodb://localhost/workout', 
// {useNewUrlParser: true,
// useUnifiedTopology: true, 
// useFindAndModify: false, 
// useCreateIndex: true,
// })
// .then(() => console.log('Connected to MongoDb!'))
// .catch(err => console.error('Erorr connecting to MongoDb', err));

mongoose
  .connect(
    db,
    { useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,

   }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// middleware & bodyparsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes/workoutroutes"));
app.use(require("./routes/html-routes"));



app.listen(PORT, () => {
  console.log(`Now Listening on port ${PORT}`);
});