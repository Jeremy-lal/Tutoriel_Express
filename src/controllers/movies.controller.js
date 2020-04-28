import { MovieService } from '../services/movies.service';
const express = require('express');

export const MovieController = (app) => {
    
    const movieService = new MovieService();
    const movieRouter = express.Router();


    movieRouter.get('/', (req, res) => {
        try {
            const result = await movieService.getAll();
            res.send(result);
        } catch (error) {
            res.status(500).send('Erreur lors de la récupération des films');
        }
    });

    movieRouter.post('/', (req, res) => {
        const movie = req.body;

        try {
            const result = await movieService.saveMovie(movie);
            res.send(result);
        } catch (error) {
            res.status(500).send('Erreur lors de la sauvgarde d\'un film');
        }
    });

    movieRouter.put('/', (req, res) => {
        const movie = req.body;

        try {
            const result = await movieService.updateMovie(movie, movie.id);
            res.send(result);
        } catch (error) {
            res.status(500).send('Erreur lors de la mise à jour d\'un film');
        }
    });


    movieRouter.delete('/:id', (req, res) => {
        const id = req.params.id;

        try {
            await movieService.deleteMovie(id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send('Erreur lors de la suppression d\'un film');
        }
    });

    app.use('/movies', movieRouter);
}