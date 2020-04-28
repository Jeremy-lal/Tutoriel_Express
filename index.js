const express = require('express');
const connection = require('./mysql')
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));


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
