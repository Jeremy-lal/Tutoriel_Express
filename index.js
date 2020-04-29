import { MovieController } from './src/controllers/movies.controller';
import { SerieController } from './src/controllers/series.controller';
const express = require('express');
const bodyParser = require('body-parser');
const loaders = require('./src/loaders/express')
const port = 3002;

async function startServer() {
  const app = express();
  
  await loaders(app);

  MovieController(app);
  SerieController(app);


  app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
  });
  
}

startServer();