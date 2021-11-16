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

const Area = ({area}) => {
    return (
        <Glassbg className="w-96 h-28 flex items-center justify-center">
            <h1 className="text-center text-4xl tracking-widest uppercase">{area}</h1>
        </Glassbg>
    )
}

export default Area
