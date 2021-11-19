import React, {useState, useEffect, useMemo} from 'react'

const Area = ({area, country, timezone}) => {
    const dateData = Date.now() + 1000 * timezone
    const [time, setTime] = useState(new Date(dateData))
    const month = useMemo(() => ((time.getUTCMonth()+1).toLocaleString('en-US',{
        minimumIntegerDigits: 2,
        useGrouping: false
      })), [time])
    const date = useMemo(() => ((time.getUTCDate()).toLocaleString('en-US',{
        minimumIntegerDigits: 2,
        useGrouping: false
      })), [time])
    const hours = (time.getUTCHours()).toLocaleString('en-US',{
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    const mins = (time.getUTCMinutes()).toLocaleString('en-US',{
        minimumIntegerDigits: 2,
        useGrouping: false
      })
      const sec = (time.getUTCSeconds()).toLocaleString('en-US',{
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    const weekDayArr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

    useEffect(() => {
      const updateTime = setInterval(() => {
        setTime(new Date(dateData))
        }, 1000)
        return () => {
        clearInterval(updateTime)
        }
    }, [dateData,time])
 

    return (
        <div className="flex flex-col items-center justify-center col-span-2 row-span-1
        bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
            <h1 className="text-center text-2xl lg:text-4xl tracking-widest uppercase">{area} / {country}</h1>
            <p>{month}/{date} {weekDayArr[time.getUTCDay()]} {hours}:{mins}:{sec}</p>
        </div>
      
    )
}
export default Area
