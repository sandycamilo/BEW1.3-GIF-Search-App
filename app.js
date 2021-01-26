// add express to start web server 

// require libraries 
const express = require('express');

// app setup 
const app = express();

// middleware ~ plugins or libraries we use to extend a web framework
// used to allow Express (our web framework) to render HTML templates and send them back to the client 
// using a new function ~ res.render('template-name', { variables }
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//routes - endpoint- get route ~ getting info to read 
// app() is an instance of Express
// app.get('/', (req, res) => {
//   // set the url of the gif
//   const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
//   // render the hello-gif view, passing the gifUrl into the view to be displayed
//   res.render('hello-gif', { gifUrl })
// })

// new route for greetings 
app.get('/greetings/:name', (req, res) => {
  // grab the name from the path provided
  const name = req.params.name;
  // render the greetings view, passing along the name
  res.render('greetings', { name })
})

// route for home 
app.get('/', (req, res) => {
  // example URL "http://localhost:3000/?term=hey"
  console.log(req.query) // => "{ term: hey" }

  res.render('home')
})

// start server 
app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});