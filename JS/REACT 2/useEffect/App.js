// import React, {useState, useEffect} from 'react';

const App = () => {
    
   const [isActive, setIsActive] =  React.useState(true);

   const [counter, setCounter] =  React.useState(0);

    const handler = () => setCounter(prevValue => prevValue + 1);

    const toogleVisibility = () => setIsActive(prevValue => !prevValue);

    const counterComponent = isActive ? <Counter rerenderCounter={counter}/> : null;

    // React.useEffect(() => {
    //     alert('hello')
    // }, []);

    return (
        <div>
            <button onClick={toogleVisibility}>Pokaż/ukryj komponent</button>
            {/* {isActive && <Counter/>} */}
            {counterComponent}
            <button onClick={handler}>Przerenderuj komponent</button>

        </div>

    );
}

const Counter = ({rerenderCounter}) => {

    const [counter, setCounter] =  React.useState(0);

    const handleMouseMove = (e) => setCounter(e.clientX);

    React.useEffect(() => {
        window.addEventListener('mousemove',handleMouseMove);


    // componentWillUnmount()
       return () => {
            window.removeEventListener('mousemove',handleMouseMove )
        }
    }, [rerenderCounter]); // gdy jedna z zaleznosci w [] zmieni wartosc, componentWillUpdate()

    return (
        <div>
            <p>{counter}</p>
            <p>{rerenderCounter}</p>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
