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

// Require tenorjs near the top of the file
const Tenor = require("tenorjs").client({
  // Replace with your own key
  "Key": "TENOR_API_KEY", // https://tenor.com/developer/keyregistration
  "Filter": "high", // "off", "low", "medium", "high", not case sensitive
  "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});


// Routes
app.get('/', (req, res) => {
  // Handle the home page when we haven't queried yet
  term = ""
  if (req.query.term) {
      term = req.query.term
  }
  // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
  Tenor.Search.Query(term, "10")
      .then(response => {
          // store the gifs we get back from the search
          const gifs = response;
          // pass the gifs as an object into the home page
          res.render('home', { gifs })
      }).catch(console.error);
})

// start server 
app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});
