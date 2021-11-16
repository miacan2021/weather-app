import React from 'react'

const Icon = (props) => {
    const source = `../icons/${props.num}.svg`

    return (
        <div>
           <img src={source} alt="weather icon" className="w-3/12" />
        </div>
    )
}

export default Icon
