const express = require('express');
const axios = require('../utils/axios');
const weather = require('../models/Weather');
const responseFormatter = require('../utils/responseFormatter');


const router = express.Router();
const APPID = process.env.APPID;

router.get('/:city', (req, res, next) => {
  //res.send('weather');
  const { city } = req.params;
  const weatherType = req.query.weatherType;
  weather
    .getData(city, weatherType)
    .then(response => responseFormatter(res, 200, null, response))
    .catch(err => next(err));
});

module.exports = router;
