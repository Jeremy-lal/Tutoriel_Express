import express, { Request, Response, Application, Router } from 'express';

export const AuthController = (app: Application) => {

    const authService = new AuthService();
    const authRouter: Router = express.Router();


    authRouter.post('/signup', async (req: Request, res: Response) => {
        const user = req.body;
        try {
            await authService.signUp(user);
            res.send('Enregistrement Ok');
        } catch (error) {
            res.status(409).send('Identifiant déjà existant');
        }
    });
}