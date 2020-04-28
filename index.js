const express = require('express');
const app = express();
const port = 3002;

const connection = require('./mysql')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/movies', (req, res) => {
  const bodyData = req.body;

  connection.query('INSERT INTO employee SET ?', bodyData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur de sauvegarde de film");
    } else {
      res.sendStatus(200);
    }
  });
});

app.post('/movies', (req, res) => {
  const {category, limit} = req.body;

  connection.query('SELECT * FROM movies WHERE category = ? LIMIT ?', [category, limit], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la récupération de film");
    } else {
      res.send(results);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
