import { SerieService } from '../services/series.service';
const express = require('express');

export const SerieController = (app) => {
    
    const serieService = new SerieService();
    const serieRouter = express.Router();


    serieRouter.get('/', (req, res) => {
        try {
            const result = await serieService.getAll();
            res.send(result);
        } catch (error) {
            res.status(500).send('Erreur lors de la récupération des series');
        }
    });

    serieRouter.post('/', (req, res) => {
        const serie = req.body;

        try {
            const result = await serieService.saveSerie(serie);
            res.send(result);
        } catch (error) {
            res.status(500).send('Erreur lors de la sauvgarde d\'une série');
        }
    });

    serieRouter.put('/', (req, res) => {
        const serie = req.body;

        try {
            const result = await serieService.updateSerie(serie, serie.id);
            res.send(result);
        } catch (error) {
            res.status(500).send('Erreur lors de la mise à jour d\'une série');
        }
    });


    serieRouter.delete('/:id', (req, res) => {
        const id = req.params.id;

        try {
            await serieService.deleteSerie(id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send('Erreur lors de la suppression d\'une série');
        }
    });

    app.use('/series', serieRouter);
}
