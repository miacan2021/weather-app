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

const Temp = ({high, low}) => {
    return (
        <Glassbg className="p-5 flex items-center justify-around col-span-1 row-span-1">
            <div className="flex flex-col">
            <h2 className="text-2xl tracking-wider">HIGH -</h2>
            <h1 className="text-center text-4xl tracking-wider">{high}°</h1>
            </div>
            <div className="flex flex-col items-center">
            <h2 className="text-2xl tracking-wider">LOW -</h2>
            <h1 className="text-center text-4xl tracking-wider">{low}°</h1>
            </div>
        </Glassbg>
    )
}

export default Temp
