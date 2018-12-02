import React, { Component } from 'react'

class CityWeather extends Component {
  render() {
    const { city, weather, temperature } = this.props;
    return (
      <div>
        <p>{city}</p>
        <p>{weather}</p>
        <p>{temperature}</p>        
      </div>
    )
  }
}

export default CityWeather;