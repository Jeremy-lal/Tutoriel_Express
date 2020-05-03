import { Log4jsService } from './../services/log4js.service';
import express, { Request, Response, Application, Router } from 'express';
import { AuthService } from '../services/auth.service';

export const AuthController = (app: Application) => {

    const authService = new AuthService();
    const log4jsService = new Log4jsService();
    const authRouter: Router = express.Router();
    const errorLogs = log4jsService.configureLog4js().getLogger('error');
    const debugLog = log4jsService.configureLog4js().getLogger('debug');


    authRouter.post('/signup', async (req: Request, res: Response) => {
        const user = req.body;
        try {
            await authService.signUp(user);
            res.send('Enregistrement Ok');
        } catch (error) {
            errorLogs.error(error);
            errorLogs.fatal(error);
            errorLogs.debug(error); /// ne marchera pas car debug n'est pas une erreur
            res.status(409).send('Identifiant déjà existant');
        }
    });

    authRouter.post('/signin', async (req: Request, res: Response) => {
        const { identifiant, pwd } = req.body;

        try {
            const { token, user } = await authService.signIn(identifiant, pwd);
            res.set('access-control-expose-headers', 'JWT_TOKEN');
            res.set('JWT_TOKEN', token);
            res.send(user);
        } catch (error) {
            debugLog.debug(error);
            res.status(400).send('L\'email ou le mot de passe est erroné');
        }
    });

    app.use('/auth', authRouter);
}
