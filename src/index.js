const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./utils/logger')


const app = express();
app.use(helmet());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}else {
  app.use(morgan('common'));
}
app.use(routes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, (err) =>{
  if(err) {
    console.error("Something wrong!");
  }
  logger.info(`server working...... on port ${PORT}`);
})