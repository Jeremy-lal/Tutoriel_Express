import { MovieService } from '../services/movies.service';
import express, { Application, Request, Response, Router } from 'express';

export const MovieController = (app: Application) => {

    const movieService = new MovieService();
    const movieRouter: Router = express.Router();


    movieRouter.get('/', async (req: Request, res: Response) => {
        try {
            const result = await movieService.getAll();
            res.send(result);
        } catch (error) {
            res.status(500).send('Erreur lors de la récupération des films');
        }
    });

    movieRouter.post('/', async (req: Request, res: Response) => {
        const movie = req.body;

        try {
            const result = await movieService.saveMovie(movie);
            res.send(result);
        } catch (error) {
            res.status(500).send('Erreur lors de la sauvgarde d\'un film');
        }
    });

    movieRouter.put('/', async (req: Request, res: Response) => {
        const movie = req.body;

        try {
            const result = await movieService.updateMovie(movie, movie.id);
            res.send(result);
        } catch (error) {
            res.status(500).send('Erreur lors de la mise à jour d\'un film');
        }
    });


    movieRouter.delete('/:id', async (req: Request, res: Response) => {
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