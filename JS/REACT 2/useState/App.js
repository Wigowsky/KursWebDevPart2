// import React, {useState} from 'react';

const App = () => {
//    const [state, setState] =  React.useState({a: 0, b: 10});
   const [info, setInfo] =  React.useState("Nie łączyć w jeden state");

   const [counter, setCounter] =  React.useState(0);

    // wartość w nawiasach () jest wykorzystana w pierwszym renderze

    // zgodnie z dobrymi praktykami powinnyśmy rozbijać state, tak jak dla counter, a nie robić tak jak w przypadku dla a i b

// const handler = () => setState({...state, a: state.a + 1});

// const handler = () => setCounter(counter + 1);

const handler = () => setCounter(prevValue => prevValue + 1); // alternatywne rozwiązanie dla counter 

    return (
        <div onClick={handler}>
           {/* <p>{state.a}</p>
           <p>{state.b}</p>  */}

            <p>{counter}</p>
        </div>

    );
}


ReactDOM.render(<App />, document.getElementById('root'))
