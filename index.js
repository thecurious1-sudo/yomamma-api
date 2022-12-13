var express = require("express");
var app = express();
//import jokes from jokes.json
const cors = require("cors");
const jokes = require("./jokes.json");
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use(cors());
app.listen(4000, function () {
  console.log("Example app listening on port 4000!");
});

//create a "/jokes" route that returns a random joke
app.get("/jokes", function (req, res) {
  res.send({ joke: jokes[Math.floor(Math.random() * jokes.length)] });
});

//create a "/search" route that returns a random joke based on the query
app.get("/search", function (req, res) {
  const query = req.query.query;
  const filteredJokes = jokes.filter((joke) => joke.includes(query));
  res.send({
    joke: filteredJokes
      ? filteredJokes[Math.floor(Math.random() * filteredJokes.length)]
      : [],
  });
});
