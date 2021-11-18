import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Icon from './components/Icon';
import Form from './components/Form';
import Temp from './components/Temp';
import Area from './components/Area';
import HL from './components/HL';
import Weekly from './components/Weekly';
import SwitchTheme from './components/SwitchTheme';
import Spiner from './components/Spiner';
import Error from './components/Error';

function App() {
  const [state, setState] = useState({
    temp: '',
    feel:'',
    cityName: '',
    weather: '',
    high: '',
    low: '',
    icon:'',
    lon:'',
    lat:'',
  })
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)

useEffect(() => {
    getCityWeather('vancouver')
}, [])
 
 const searchCity = (event) => {
    setLoading(true)
    setErr(false)
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
        icon: response.data.weather[0].icon,
        lon: response.data.coord.lon,
        lat: response.data.coord.lat
      })
      setLoading(false)
    }).catch((error) => {
        console.log(error)
        setLoading(false)
        setErr(true)
    })
  }

  return (
    <div className="h-screen w-screen bg-cover overflow-scroll bg-no-repeat bg-fixed object-cover bg-center font-ab text-gray-900 dark:text-gray-50" 
    style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?${state.cityName})`}}>
     <SwitchTheme />
     <div className="max-w-screen-md md:max-w-7xl flex flex-col items-center justify-center m-auto">
     <div className="pt-10 w-full md:w-5/6 lg:w-4/6">
     <Form searchCity={searchCity} />
     </div>
     { loading ? <Spiner /> :
      !err ?
        <>
        <div className="grid grid-col-2 grid-rows-5 w-11/12 md:w-10/12 md:h-5/6 lg:w-7/12 lg:h-4/6 my-6 items-stretch gap-2 justify-items-stretch mx-auto">
          <Area area={state.cityName} />
          <Temp temp={state.temp} feel={state.feel} />
          <Icon num={state.icon} weather={state.weather} />
          <HL high={state.high} low={state.low} />
          <Weekly lon={state.lon} lat={state.lat} />
        </div>
       </>
        :
        <Error />
      }
     </div> 
    </div>

  );
}

export default App;
