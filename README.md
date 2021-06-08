# Workout-Tracker

[![License MIT](https://img.shields.io/apm/l/pack)](https://spdx.org/licenses/MIT.html)
 ## Table of Contents
1. [Description](#description)

2. [Installation](#installation)

3. [Usage](#usage)

4. [Questions](#questions)

-----

## Description
The Fitness Tracker Application is a RESTful API built upon Express.Js and Mongoose that gives the user the feeling and control of a real Exercise tracking application. The app enables the user to add new workouts that they have completed to track the name ,types, weight, number of sets/reps, and duration of their workouts. This mini-project was a greate exercise in practicing and reiterating the principles of CRUD and following the Model View Controller methodology. Although, a template engine to dynamically render the front-end to the user was not used here, in future developments I would like to add Handlebars, Pug or even React to render out the front-end framework.

 -----

 ## Installation
 

   Getting Started:
   
  
  

    npm install
    npm init --yes
    npm install mongoose
  



  



 ## Usage

 ---

 Run NoSQL/Mongoose Npm:
  * After installing and requiring our Npm packages we set up our connectiong to MongoDB
  ```

  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/   workout', {useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDb!'))
  .catch(err => console.error('Erorr connecting to MongoDb', err));

 
    
   

 Start the Server:  
 
   node server.js 
```






Screenshots of Application:
--
Add a new exercise to your Fitness Tracker: 

![Screenshot](img/addexercise.png)

Fill out the details of your workout:

![Screenshot](img/exerciseform.png)

See your hardwork:

![Screenshot](img/completedexercise.png)

Dashboard of your Exercise Statistics:

![Screenshot](img/exercisestats.png)



Visit the Repo: 
--
[Github]**<https://github.com/bdurham227/Workout-Tracker>**

   







 ## License
 
[![License MIT](https://img.shields.io/apm/l/pack)](https://spdx.org/licenses/MIT.html)

   https://opensource.org/licenses/MIT

    Licensed under the MIT License

    Copyright © [2021] [Benjamin Durham]
    

         Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE



 ## Questions
 ---
 For additional questions about usage, installation or application improvement contact me through

Github: https://github.com/bdurham227

Email: bdurham227@gmail.com:

