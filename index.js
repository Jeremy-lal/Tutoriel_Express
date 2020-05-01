const express = require('express');
const connection = require('./mysql')
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));



app.get('/movies', (req, res) => {
  connection.query('SELECT * from movie;', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

app.put('/movies', (req, res) => {
  const bodyData = req.body;

  connection.query('UPDATE movie SET ? WHERE id = ?', [bodyData, bodyData.id], err => {
    if (err) {
      res.status(500).send("Erreur de mise à jour d'un film");
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const bodyData = req.body;

  connection.query('UPDATE movie SET ? WHERE id = ?', [bodyData, id], err => {
    if (err) {
      res.status(500).send("Erreur de mise à jour d'un film");
    } else {
      res.sendStatus(200);
    }
  });
});



app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
