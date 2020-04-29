import express, { Router, Request, Response, Application } from 'express';
import { UserService } from '../services/user.service';

export const UserController = (app: Application) => {

    const userRouter: Router = express.Router();
    const userService = new UserService();

    userRouter.get('/', async (req: Request, res: Response) => {
        const result = await userService.getAll();
        res.send(result);
    });

    userRouter.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);

        try {
            const result = await userService.getById(id);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id n\'a pas été trouvé' + id);
        }
    });

    userRouter.get('/auth/:identifiant', async (req: Request, res: Response) => {
        const identifiant = req.params.username;

        try {
            const result = await userService.getByIdentifiant(identifiant);
            res.send(result);
        } catch (error) {
            res.status(404).send(identifiant + 'n\'a pas été trouvé');
        }
    });

    userRouter.post('/', (req: Request, res: Response) => {
        const user = req.body;
        userService.saveUser(user);
        res.send(user);
    });

    userRouter.put('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const user = req.body;
        userService.updateUser(user, id);
        res.send(user);
    });

    userRouter.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        userService.deleteUser(id);
        res.send();
    });

    app.use('/users', userRouter);
};
