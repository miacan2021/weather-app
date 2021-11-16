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
    <div className="h-screen w-screen bg-cover overflow-hidden bg-no-repeat bg-fixed object-cover bg-center font-ab text-gray-900" 
    style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?${state.cityName})`}}>
     <div className="pt-10 max-w-10/12">
     <Form searchCity={searchCity} />
     </div>
     <div className="max-w-10/12">
      {state.cityName && (
        <div className="grid grid-col-2 grid-rows- w-7/12 h-4/6 mx-auto my-6 items-stretch gap-2 justify-items-stretch">
          <Area area={state.cityName} />
          <Temp temp={state.temp} feel={state.feel} />
          <Icon num={state.icon} weather={state.weather} />
          <HL high={state.high} low={state.low} />
        </div>
       )}
        </div>
    </div>
  );
}

export default App;
