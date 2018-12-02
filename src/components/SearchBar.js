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
      city: event.target.value
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
    console.log(weather)
    return weather.map((item,index) => {
      return <CityWeather 
        key={index}
        city={item.name}
        weather={item.weather[0].icon}
        temperature={item.main.temp}
      />
    })
  }

  render() {
    
    const { city, showWeather } = this.state;

    return (
      <div>
        <div className="search-bar">
          <form onSubmit={this.searchCity}>
            <input onChange={this.handleInput} type="text" className="input" name="city" placeholder="Search city" value={city}/>
            <input type="submit" value="Search"/>
          </form>
        </div> 
        { showWeather ? this.renderWeather() : null}       
      </div>
    )
  }
}

export default SearchBar;