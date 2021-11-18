import React from 'react'

const Error = () => {
    return (
        <div className="mt-20 text-center text-xl font-ab tracking-wider p-3 bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
          <h1 className="text-3xl m-2">Sorry!</h1>
          <h2>There is no information for the city you entered.</h2>
          <h2>Try other cities.</h2>
        </div>
    )
}

export default Error
