const mongoose = require('mongoose');
const express = require('express');
// const db = require('./config/keys').MONGODB_URI;

const app = express();
const PORT = process.env.PORT || 3002;


const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_DB_URI || "mongodb+srv://admin:password12345@cluster0.49a2f.mongodb.net/Workout-Tracker?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});






// mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout', 
{useNewUrlParser: true,
useUnifiedTopology: true, 
useFindAndModify: false, 
useCreateIndex: true,
})
.then(() => console.log('Connected to MongoDb!'))
.catch(err => console.error('Erorr connecting to MongoDb', err));

// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,

//    }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));


// middleware & bodyparsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes/workoutroutes"));
app.use(require("./routes/html-routes"));



app.listen(PORT, () => {
  console.log(`Now Listening on port ${PORT}`);
});