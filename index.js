const express = require('express');
const connection = require('./mysql')
const bodyParser = require('body-parser');

const app = express();
const port = 3002;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true ));

                               
app.post('/films', (req, res) => {
  const bodyData = req.body;

  connection.query('INSERT INTO employee SET ?', bodyData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur de sauvegarde de film");
    } else {
      res.sendStatus(201);
    }
  });
});

app.post('/films', (req, res) => {
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
