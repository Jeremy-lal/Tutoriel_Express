const express = require('express');
const connection = require('./mysql')
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));


app.get('/films', (req, res) => {
  connection.query('SELECT * from movies;', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

app.get('/films/:id', (req, res) => {
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

app.get('/films', (req, res) => {
  let request = 'SELECT * FROM movies';
  const querysValues = [];
  if (req.query.category) {
    request += ' WHERE category = ?';
    querysValues.push(req.query.category);
  }

  connection.query(sql, querysValues, (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});

app.post('/movies', (req, res) => {
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

app.put('/films', (req, res) => {
  const bodyData = req.body;

  connection.query('UPDATE movies SET ? WHERE id = ?', [bodydata, bodydata.id], err => {
    if (err) {
      res.status(500).send("Erreur de mise à jour d'un film");
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/films/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const bodyData = req.body;

  connection.query('UPDATE movies SET ? WHERE id = ?', [bodydata, id], err => {
    if (err) {
      res.status(500).send("Erreur de mise à jour d'un film");
    } else {
      res.sendStatus(200);
    }
  });
});

app.delete('/films/:id', (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM movies WHERE id = ?', [id], err => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression d'un employé");
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
