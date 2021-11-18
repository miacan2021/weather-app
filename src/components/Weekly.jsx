import React,{useState, useEffect} from 'react'
import axios from 'axios';

import {ReactComponent as D01} from '../icons/01d.svg'
import {ReactComponent as N01} from '../icons/01n.svg'
import {ReactComponent as D02} from '../icons/02d.svg'
import {ReactComponent as N02} from '../icons/02n.svg'
import {ReactComponent as D03} from '../icons/03d.svg'
import {ReactComponent as N03} from '../icons/03n.svg'
import {ReactComponent as D04} from '../icons/04d.svg'
import {ReactComponent as N04} from '../icons/04n.svg'
import {ReactComponent as D09} from '../icons/09d.svg'
import {ReactComponent as N09} from '../icons/09n.svg'
import {ReactComponent as D10} from '../icons/10d.svg'
import {ReactComponent as N10} from '../icons/10n.svg'
import {ReactComponent as D11} from '../icons/11d.svg'
import {ReactComponent as N11} from '../icons/11n.svg'
import {ReactComponent as D13} from '../icons/13d.svg'
import {ReactComponent as N13} from '../icons/13n.svg'
import {ReactComponent as D50} from '../icons/50d.svg'
import {ReactComponent as N50} from '../icons/50n.svg'

const Weekly = (props) => {
    const [week, setWeek] = useState([])
    

    useEffect(() => {
      setWeek([])
      getWeeklyWeather(props.lat, props.lon)
    }, [props])

    
    const getWeeklyWeather = (la, lo) => {
        const weekly = `https://api.openweathermap.org/data/2.5/onecall?lat=${la}&lon=${lo}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        axios(weekly).then((res) => {
        for(let i = 1; i < res.data.daily.length; i++){
             setWeek(((prevState)=>
               [...prevState,
                {
                 date: res.data.daily[i].dt,
                 temp: res.data.daily[i].temp.day,
                 weather: res.data.daily[i].weather[0].main,
                 icon: res.data.daily[i].weather[0].icon
                }
               ]
             ))
        }
      })
      }
    
    return (
    
      <div className="grid grid-flow-col col-span-2 row-span-2 gap-2 overflow-x-scroll md:overflow-auto mt-2">
          {week.map((w,i) => {    
         const switchIcon = () => {
          switch(w.icon) {
            case '01d': return <D01 key={i+w.icon} className="w-7/12 fill-current" />
            case '01n': return <N01 key={i+w.icon} className="w-7/12 fill-current" />
            case '02d': return <D02 key={i+w.icon} className="w-7/12 fill-current" />
            case '02n': return <N02 key={i+w.icon} className="w-7/12 fill-current" />
            case '03d': return <D03 key={i+w.icon} className="w-7/12 fill-current" />
            case '03n': return <N03 key={i+w.icon} className="w-7/12 fill-current" />
            case '04d': return <D04 key={i+w.icon} className="w-7/12 fill-current" />
            case '04n': return <N04 key={i+w.icon} className="w-7/12 fill-current" />
            case '09d': return <D09 key={i+w.icon} className="w-7/12 fill-current" />
            case '09n': return <N09 key={i+w.icon} className="w-7/12 fill-current" />
            case '10d': return <D10 key={i+w.icon} className="w-7/12 fill-current" />
            case '10n': return <N10 key={i+w.icon} className="w-7/12 fill-current" />
            case '11d': return <D11 key={i+w.icon} className="w-7/12 fill-current" />
            case '11n': return <N11 key={i+w.icon} className="w-7/12 fill-current" />
            case '13d': return <D13 key={i+w.icon} className="w-7/12 fill-current" />
            case '13n': return <N13 key={i+w.icon} className="w-7/12 fill-current" />
            case '50d': return <D50 key={i+w.icon} className="w-7/12 fill-current" />
            case '50n': return <N50 key={i+w.icon} className="w-7/12 fill-current" />
           default : return <D01 key={i+w.icon} className="w-7/12 fill-current" />
      }
  }
            const time = new Date(w.date*1000);
            const weeklyDate = time.toLocaleDateString().slice(0,5)
            return(
              <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40" key={i}>
              {switchIcon()}
              <p key={w.date+i}>{weeklyDate}</p>
              <p key={w.temp+i}>{w.temp}°</p>
              <p key={w.weather+i}>{w.weather}</p>
              </div>
          )})}
      </div>
    )
}

export default Weekly
