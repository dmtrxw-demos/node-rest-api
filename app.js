if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const routes = require('./routes/');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', routes);

app.use(function(err, req, res, next) {
  console.log(err);

  if (err.code === 404) {
    res.status(404).json({
      message: 'Resource not found',
    });

  } else if (err.name === 'SequelizeValidationError') {
    const errors = err.errors.map((error) => ({
      message: error.message,
      path: error.path,
    }));

    res.status(400).json({
      errors,
    });
  } else {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

app.listen(port, function() {
  console.log('REST API listening on port', port);
});
