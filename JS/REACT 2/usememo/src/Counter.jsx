import React from 'react';


const Counter = ({counter, index}) => {

    console.log(`render licznika numer: ${index}`)

    return ( 
        <div>
            Licznik numer {index} wynosi {counter};
        </div>
     );
}

// export default Counter;

export default React.memo(Counter);

// Po wykorzystaniu memo jeśli props dla tego komponentu się nie zmieniły 
//to nie renderuje się on ponownie