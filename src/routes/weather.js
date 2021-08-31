const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/:city', (req,res) => {
  //res.send('weather');
  const { city } = req.params;

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d02e4b47c5bf2bd3c9e43fe05aebaee7`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
