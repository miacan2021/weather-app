import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Icon from './components/Icon';
import Form from './components/Form';
import Temp from './components/Temp';
import Area from './components/Area';
import HL from './components/HL';



function App() {
  const [state, setState] = useState({
    temp: '',
    feel:'',
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
        feel: response.data.main.feels_like,
        weather: response.data.weather[0].description,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        cityName: response.data.name,
        icon: response.data.weather[0].icon
      })
    })
  }


  return (
    <div className="h-screen w-screen bg-cover bg-no-repeat bg-fixed object-cover bg-center font-ab text-gray-900" 
    style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?${state.cityName})`}}>
     <div className="pt-10">
     <Form searchCity={searchCity} />
     </div>
      {state.cityName && (
        <div className="grid grid-col-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 w-8/12 m-auto items-center">
          <Area area={state.cityName} />
          <Icon num={state.icon} weather={state.weather}/>
          <HL high={state.high} low={state.low} />
          <Temp temp={state.temp} feel={state.feel} />
        </div>
       )}
        
    </div>
  );
}

export default App;
