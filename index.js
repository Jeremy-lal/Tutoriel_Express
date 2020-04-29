import { MovieController } from './src/controllers/movies.controller';
import { SerieController } from './src/controllers/series.controller';
const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;

async function startServer() {
  const app = express();
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true }));

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