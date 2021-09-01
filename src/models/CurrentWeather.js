class CurrentWeather {
  constructor(rawData) {
    const { dt, main, weather, wind } = rawData;
    this.time = dt;
    this.temp = main.temp
    this.minTemp = main.temp_min;
    this.maxTemp = main.temp_max;
    this.humidity = main.humidity;
    this.windSpeed = wind.speed;
    this.weather = weather[0].main;
    this.weatherDescription = weather[0].description;
    this.windDirection = this.calculateWindDirection(wind.deg);
  }

  calculateWindDirection(degree){
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const value = Math.floor((degree + 22.5 ) / 45);
    return directions[value % 8];
  }
}

module.exports = CurrentWeather;