import React,{useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components'
const Glassbg = styled.div`
background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 9px );
-webkit-backdrop-filter: blur( 9px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`

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
            const source = `../icons/${w.icon}.svg`
            var time = new Date(w.date*1000);
            return(
              <Glassbg className="flex flex-col items-center justify-center p-2" key={i}>
              <img key={w.icon+i} src={source} alt="weather icon" className="w-6/12" />
              <p key={w.date+i}>{time.toLocaleDateString().slice(0,5)}</p>
              <p key={w.temp+i}>{w.temp}°</p>
              <p key={w.weather+i}>{w.weather}</p>
              </Glassbg>
          )})}
      </div>
    )
}

export default Weekly
