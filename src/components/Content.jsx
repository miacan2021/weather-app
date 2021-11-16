import React from 'react'
import styled from 'styled-components';


const Glassbg = styled.div`

background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3.5px );
-webkit-backdrop-filter: blur( 3.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Content = (props) => {
    return (
        <Glassbg className="w-8/12 h-5/6">
         <form onSubmit={props.searchCity}>
        <input type="text" name="city" id="city" placeholder="Enter a city name" />
        <button>GO</button>
      </form>
        </Glassbg>
    )
}

export default Content
