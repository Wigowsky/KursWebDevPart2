import React from 'react'
import { useLocation } from 'react-router-dom'

const location = useLocation();

//prostsza, mniej bogata wersja History doczytać kiedy używać History a kiedy Location

const isActive = location.state && location.state.isActive

const Location = () => {
    return ( 
        <div>
        <p>Przesłana innformacja : {String(isActive)}</p>
        </div>
     );
}
 
export default Location;