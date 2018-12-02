import React, { Component } from 'react'

class CityWeather extends Component {
  render() {
    const { city, weather, temperature, description, maxTemp, minTemp } = this.props;
    return (
      <div className="city-weather">
        <p className="city-name">{ city }</p>
        <div className="container">
          <div className="weather-info">         
            <img className="weather-icon" src={`http://openweathermap.org/img/w/${weather}.png`} alt="weather icon"/>
            <p className="weather-description">{ description }</p>    
          </div>
          <div className="temperatures">
            <p className="temperature">{ Math.round(temperature) }º</p>  
            <p className="max-min-temp">Max: { Math.round(maxTemp) }º / Min: { Math.round(minTemp) }º</p>
          </div>
        </div>      
      </div>
    )
  }
}

export default CityWeather;