const express = require('express');
const router = express.Router();
const connection = require('../mysql')

router.get('/', (req, res) => {
    connection.query('SELECT * from movies;', (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération des films');
        } else {
            res.json(results);
        }
    });
});

router.post('/', (req, res) => {
    const { category, limit } = req.body;

    connection.query('SELECT * FROM movies WHERE category = ? LIMIT ?', [category, limit], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la récupération de film");
        } else {
            res.send(results);
        }
    });
});

router.put('/', (req, res) => {
    const bodyData = req.body;

    connection.query('UPDATE movies SET ? WHERE id = ?', [bodydata, bodydata.id], err => {
        if (err) {
            res.status(500).send("Erreur de mise à jour d'un film");
        } else {
            res.sendStatus(200);
        }
    });
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;

    connection.query('DELETE FROM movies WHERE id = ?', [id], err => {
        if (err) {
            res.status(500).send("Erreur lors de la suppression d'un employé");
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;