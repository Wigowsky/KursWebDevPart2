import React from 'react'
import { useHistory } from 'react-router-dom'

const History = () => {

    const history= useHistory();

    //routing przy użyciu hooka

    const handlleOnClick = () => {
        const location = {
            pathmane: '/lokalizacja',
            state : {
                isActive: true,
            }

            // może też przekazywać state w pushState
        };

        history.pushState(location);

        //przejrzeście do wskazanej lokalizacji

    };

    const handlleOnClick = () => history.goBack();

    // powrót do poprzedniej strony

    return ( 
    <div>
        <h2>React</h2>
        <button button onClick={handlleOnClick}>Idź do location</button>
        <button button onClick={handlleOnClick2}>Wróć do poprzedniej strony</button>
    </div> );
}
 
export default History;