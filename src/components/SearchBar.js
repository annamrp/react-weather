import React, { Component } from 'react'
import weatherServer from '../services/weatherService';
import CityWeather from './CityWeather';

 class SearchBar extends Component {
   state = {
     city: '',
     weather: [],
     showWeather: false
   }

   handleInput = (event) => {
    this.setState({
      city: event.target.value,
      showWeather: false
    })
   }

   searchCity = (event) => {
    event.preventDefault()
    let { city } = this.state;
    city = city.replace(/^\w/, c => c.toUpperCase())

    weatherServer.getWeather(city)
    .then((result) => {
      this.setState({
        weather: [result],
        showWeather: true,
        city: ''
      })
      
    })
    .catch(error => {
      console.log(error)
    })
   }
   renderWeather() {
    const { weather } = this.state;
    return weather.map((item,index) => {
      return <CityWeather 
        key={ index }
        city={ item.name }
        weather={ item.weather[0].icon }
        description={ item.weather[0].description }
        temperature={ item.main.temp }
        minTemp={ item.main.temp_min}
        maxTemp={ item.main.temp_max }
      />
    })
  }

  render() {
    
    const { city, showWeather } = this.state;

    return (
      <div className="weather-search">
          <form className="search-form" onSubmit={ this.searchCity }>
            <input onChange={ this.handleInput } type="text" className="input" name="city" placeholder="Search city" value={ city } required />
            <input className="icon" type="image" src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png' alt="icon submit"/>
          </form>
        <div className="weather-box">
         { showWeather ? this.renderWeather() : null }   
        </div>    
      </div>
    )
  }
}

export default SearchBar;