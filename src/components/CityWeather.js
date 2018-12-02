import React, { Component } from 'react'

class CityWeather extends Component {
  render() {
    const { city, weather, temperature } = this.props;
    console.log(weather)
    return (
      <div>
        <p>{city}</p>
        <img src={`http://openweathermap.org/img/w/${weather}.png`} alt="weather icon"/>
        <p>{temperature}º</p>        
      </div>
    )
  }
}

export default CityWeather;