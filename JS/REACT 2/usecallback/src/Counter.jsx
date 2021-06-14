import React from 'react';


const Counter = ({callback, index}) => {

    console.log(`render licznika numer: ${index}`)

    return ( 
        <div>
            <button onClick={callback}>Zwiększ licznik {index}</button>
        </div>
     );
}

// export default Counter;

export default React.memo(Counter);

// Po wykorzystaniu memo jeśli props dla tego komponentu się nie zmieniły 
//to nie renderuje się on ponownie