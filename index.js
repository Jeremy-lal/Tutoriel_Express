const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;
const series = require('./routes/series');
const films = require('./routes/films');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use('/series', series);
app.use('/films', films);


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
