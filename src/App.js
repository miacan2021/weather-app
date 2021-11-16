import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Icon from './components/Icon';
import Content from './components/Content';


function App() {
  const [state, setState] = useState({
    temp: '',
    cityName: '',
    weather: '',
    high: '',
    low: '',
    icon:''
  })

  useEffect(() => {
    getCityWeather('vancouver')
  }, [])
 
 const searchCity = (event) => {
    event.preventDefault()
    const updateCity = document.querySelector('#city').value
    getCityWeather(updateCity)
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
        icon: response.data.weather[0].icon
      })
    })
  }


  return (
    <div className="w-screen h-screen bg-cover bg-no-repeat object-cover bg-center flex items-center justify-center" style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?${state.cityName})`}}>
      <Content searchCity={searchCity} />
      {state.cityName && (<p>
         {state.cityName} 
          temp:{state.temp}
          high:{state.high}
          low:{state.low}
          weather:{state.weather}
          icon: {state.icon}
          </p>)}
          <Icon num={state.icon}/>
    </div>
  );
}

export default App;
