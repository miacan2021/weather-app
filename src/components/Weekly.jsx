import React,{useState, useEffect} from 'react'
import axios from 'axios';
import chooseIcon from './chooseIcon';

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
    
      <div className="grid grid-flow-col col-span-2 row-span-1 md:row-span-2 gap-2 overflow-x-scroll md:overflow-auto mt-2">
          {week.map((w,i) => {    
            const time = new Date(w.date*1000)
            const month = time.getUTCMonth()+1
            const day = time.getUTCDate()
            return(
              <div className="mb-0 md:mb-2 flex flex-col items-center justify-around p-4 md:p-2 bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40" key={i}>
              {chooseIcon(w.icon)}
              <p key={w.date+i} className="md:text-lg text-sm"> {month}/{day}</p>
              <p key={w.temp+i} className="md:text-md text-sm">{w.temp}°</p>
              <p key={w.weather+i} className="md:text-md text-sm">{w.weather}</p>
              </div>
          )})}
      </div>
    )
}
export default Weekly
