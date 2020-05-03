import { AuthController } from './controllers/auth.controller';
import { MovieController } from './controllers/movie.controller';
import { SerieController } from './controllers/series.controller';
import express from 'express';
import loaders from './loaders';
import { UserController } from './controllers/user.controller';
const port = 3002;

async function startServer() {
  const app = express();

  await loaders(app);

  MovieController(app);
  SerieController(app);
  AuthController(app);
  UserController(app);


  app.listen(port, (err: Error) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
  });

}

startServer();
