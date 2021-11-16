import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Icon from './components/Icon';
import Form from './components/Form';


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
    document.querySelector('#city').value = ''
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
    <div className="h-screen w-screen bg-cover bg-no-repeat bg-fixed object-cover bg-center" 
    style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?${state.cityName})`}}>
     <div className="pt-10">
     <Form searchCity={searchCity} />
     </div>
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
