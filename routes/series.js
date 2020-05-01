const express = require('express');
const router = express.Router();
const connection = require('../mysql')

router.get('/', (req, res) => {
    connection.query('SELECT * from series;', (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération des series');
        } else {
            res.json(results);
        }
    });
});

router.post('/', (req, res) => {
    const bodyData = req.body;
  
    connection.query('INSERT INTO series SET ?', bodyData, (err, results) => {
      if (err) {
        res.status(500).send("Erreur de sauvegarde de serie");
      } else {
        res.sendStatus(201);
      }
    });
  });

router.put('/', (req, res) => {
    const bodyData = req.body;

    connection.query('UPDATE series SET ? WHERE id = ?', [bodyData, bodyData.id], err => {
        if (err) {
            res.status(500).send("Erreur de mise à jour d'une serie");
        } else {
            res.sendStatus(200);
        }
    });
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;

    connection.query('DELETE FROM series WHERE id = ?', [id], err => {
        if (err) {
            res.status(500).send("Erreur lors de la suppression d'une serie");
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;