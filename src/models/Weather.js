const axios = require('../utils/axios');
const City = require('./City');
const ForcastWeather = require('./ForcastWeather');
const CurrentWeather = require('./CurrentWeather');


class Weather {
  constructor(){}

  getData(city, weatherType) {
    //const key = ``
    return Promise.all(getWeatherData(city)) .then(dataArray => {
      // const city = dataArray
      const current = dataArray[0].data;
      const forcast = dataArray[1].data;
      // console.log(1, current);
      // console.log(2, forcast);
      const weather = {
        city: new City(current),
        current: new CurrentWeather(current),
        forcast: forcast.list.map(i => new ForcastWeather(i))
      };
      filterData(weather, weatherType);
      return weather;
    });
  }
}

module.exports = new Weather();

function filterData(data, weatherType) {
  if (weatherType === 'current') {
    delete data.forcast;
  }
  if (weatherType === 'forecast') {
    delete data.current;
  }
  return data;
}

function getWeatherData (city) {
  const querySting = `${city}`;
  const urls = ['/weather', '/forecast'];
  return urls.map(i => {
    return axios.get(i, { params: { q: querySting } })
  })
}
