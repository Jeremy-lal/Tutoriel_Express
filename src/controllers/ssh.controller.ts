
import express, { Router, Request, Response, Application } from 'express';
import { SshService } from '../services/ssh.service';

export const SshControler = (app: Application) => {

    const sshService = new SshService();
    const sshRouter: Router = express.Router();

    sshRouter.get('/mode', async (req: Request, res: Response) => {
        try {
            const result = await sshService.getLsResult();
            res.json(result);
        } catch (error) {
            res.status(500).send('error occured');
        }
    });

    app.use('/ssh', sshRouter);
}
