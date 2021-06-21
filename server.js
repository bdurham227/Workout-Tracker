const mongoose = require('mongoose');
const express = require('express');



const app = express();
const PORT = process.env.PORT || 3002;


// mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => console.log('Connected to MongoDb!'))
.catch(err => console.error('Erorr connecting to MongoDb', err));




// middleware & bodyparsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes/workoutroutes"));
app.use(require("./routes/html-routes"));





app.listen(PORT, () => {
  console.log(`Now Listening on port ${PORT}`);
});