import { SerieService } from '../services/series.service';
import express, { Application, Request, Response, Router } from 'express';

export const SerieController = (app: Application) => {

    const serieService = new SerieService();
    const serieRouter: Router = express.Router();


    serieRouter.get('/', async (req: Request, res: Response) => {
        try {
            const result = await serieService.getAll();
            res.send(result);
        } catch (error) {
            res.status(500).send('Erreur lors de la récupération des series');
        }
    });

    serieRouter.post('/', async (req: Request, res: Response) => {
        const serie = req.body;

        try {
            const result = await serieService.saveSerie(serie);
            res.sendStatus(201);
        } catch (error) {
            res.status(500).send('Erreur lors de la sauvgarde d\'une série');
        }
    });

    serieRouter.put('/', async (req: Request, res: Response) => {
        const serie = req.body;

        try {
            const result = await serieService.updateSerie(serie, serie.id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send('Erreur lors de la mise à jour d\'une série');
        }
    });


    serieRouter.delete('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);

        try {
            await serieService.deleteSerie(id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send('Erreur lors de la suppression d\'une série');
        }
    });

    app.use('/series', serieRouter);
}