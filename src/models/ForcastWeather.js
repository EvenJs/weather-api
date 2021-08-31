const CurrentWeather = require('./CurrentWeather');

class ForcastWeather extends CurrentWeather{
  constructor(rawData) {
    super(rawData);
    this.time = rawData.dt;
  }
}

module.exports = ForcastWeather;
