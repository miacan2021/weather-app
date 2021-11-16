import React from 'react'
import styled from 'styled-components';

const Glassbg = styled.div`
background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 9px );
-webkit-backdrop-filter: blur( 9px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Form = (props) => {
    return (
    <Glassbg className="w-5/12 mx-auto py-5">
       <form onSubmit={props.searchCity} className="flex items-center justify-center">
        <input type="text" name="city" id="city" placeholder="Enter a city name" 
        className="appearance-none bg-transparent flex-shrink-0 focus:outline-none focus:bg-transparent border-b border-indigo-900	w-4/12 h-10 text-center uppercase placeholder-indigo-900 text-indigo-900 tracking-wider rounded" />
       </form>
    </Glassbg>
    )
}

export default Form
