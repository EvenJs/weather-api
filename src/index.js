const express = require('express');
require('dotenv').config();
const routes = require('./routes');


const app = express();

app.use(routes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, (err) =>{
  if(err) {
    console.error("Something wrong!");
  }
  console.log(`server working...... on port ${PORT}`);
})