import axios from 'axios';

class WeatherServer {
  
  constructor() {
    this.weatherService = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }

  getWeather(city){
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9aff555e67431723d89958d9c9010661&units=metric`)
    .then(({ data }) => data);
  }
}

const weatherServer = new WeatherServer();

export default weatherServer;