const express = require('express');
const app = express();
const port = 3002;

const connection = require('./mysql')

// app.get('/movies', (req, res) => {
//   connection.query('SELECT * from movies;', (err, results) => {
//     if (err) {
//       res.status(500).send('Erreur lors de la récupération des films');
//     } else {
//       res.json(results);
//     }
//   });
// });

app.get('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  connection.query('SELECT * from movies WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération du film');
    } else if (results.length === 0) {
      return res.status(404).send('Employee not found');
    } else {
      res.json(results[0]);
    }
  });
});

app.get('/movies', (req, res) => {
  let request = 'SELECT * FROM movies';
  const querysValues = [];
  if (req.query.category) {
    request += ' WHERE category = ?';
    querysValues.push(req.query.category);
  }

  connection.query(request, querysValues, (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
