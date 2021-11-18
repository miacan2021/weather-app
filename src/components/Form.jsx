import React from 'react'

const Form = (props) => {
    return (
    <div className="py-5 bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
       <form onSubmit={props.searchCity} className="flex items-center justify-center">
        <input type="text" name="city" id="city" placeholder="Enter a city name" 
        className="appearance-none bg-transparent flex-shrink-0 focus:outline-none focus:bg-transparent border-b border-gray-900 dark:border-gray-50 text-center uppercase placeholder-gray-900 dark:placeholder-gray-50 tracking-wider rounded text-2xl" />
       </form>
    </div>
    )
}

export default Form
