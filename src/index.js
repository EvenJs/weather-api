const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req,res) => {
  res.send("welcome!");
})

app.get('/api/weather/:city', (req,res) => {
  //res.send('weather');
  const { city } = req.params;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d02e4b47c5bf2bd3c9e43fe05aebaee7`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});


const PORT = process.env.PORT || 9000;

app.listen(PORT, (err) =>{
  if(err) {
    console.error("Something wrong!");
  }
  console.log(`server working...... on port ${PORT}`);
})