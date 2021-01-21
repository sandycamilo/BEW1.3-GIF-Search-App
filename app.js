// add express to start web server 

// require libraries 
const express = require('express');

// app setup 
const app = express();

// middleware

// routes 
app.get('/', (req, res) => {
  res.send('Hello World!');
})

// start server 
app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});