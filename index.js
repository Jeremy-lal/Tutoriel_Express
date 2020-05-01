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

app.delete('/movies/:id', (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM movie WHERE id = ?', [id], err => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression d'un film");
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
