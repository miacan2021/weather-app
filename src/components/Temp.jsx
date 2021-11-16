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

const Temp = ({temp, feel}) => {
    return (
        <Glassbg className="flex flex-col items-center justify-around p-5 col-span-1 row-span-4">
            <h2 className="uppercase text-center text-2xl tracking-wider">Current Temp</h2>
            <h1 className="text-center text-7xl tracking-wider">{temp}°</h1>
            <h2 className="uppercase text-center text-2xl tracking-wider">feels like</h2>
            <h1 className="text-center text-4xl tracking-wider">{feel}°</h1>
        </Glassbg>
    )
}

export default Temp
