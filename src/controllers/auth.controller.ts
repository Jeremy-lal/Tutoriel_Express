import express, { Request, Response, Application, Router } from 'express';
import { AuthService } from '../services/auth.service';

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

    authRouter.post('/signin', async (req: Request, res: Response) => {
        const {identifiant, pwd}= req.body;
        
        try {
          const { token, user } = await authService.signIn(identifiant, pwd);
          res.set('access-control-expose-headers', 'JWT_TOKEN');
          res.set('JWT_TOKEN', token);
          res.send(user);
        } catch (error) {
            res.status(400).send('L\'email ou le mot de passe est erroné');
          }
      });
}