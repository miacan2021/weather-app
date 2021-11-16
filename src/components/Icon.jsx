import React from 'react'
import styled from 'styled-components'

const Glassbg = styled.div`
background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 9px );
-webkit-backdrop-filter: blur( 9px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`
const Icon = (props) => {
    const source = `../icons/${props.num}.svg`

    return (
        <Glassbg className="w-56 h-56 flex flex-col items-center justify-center">
           <img src={source} alt="weather icon" className="w-7/12" />
            <p className="text-2xl tracking-wider">{props.weather}</p>
        </Glassbg>
    )
}

export default Icon
