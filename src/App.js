import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    temp: '',
    cityName: '',
    weather: '',
    high: '',
    low: '',
  })

 const searchCity = (event) => {
    event.preventDefault()
    const city = document.querySelector('#city').value
    getCityWeather(city)
  }

  const getCityWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    axios(url).then((response) => {
      setState({
        temp: response.data.main.temp,
        weather: response.data.weather[0].description,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        cityName: response.data.name,
      })
    })
  }


  return (
    <div className="App">
      <h1>weather app</h1>
      <form onSubmit={searchCity}>
        <input type="text" name="city" id="city" placeholder="Enter a city name" />
        <button>GO</button>
      </form>
      {state.cityName && (<p>
         {state.cityName} 
          temp:{state.temp}
          high:{state.high}
          low:{state.low}
          weather:{state.weather}
          </p>)}
    </div>
  );
}

export default App;
