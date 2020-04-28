const express = require('express');
const connection = require('./mysql')
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));


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



app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
