import React, { useEffect, useLayoutEffect } from 'react';

const Triangle = () => {

    // useEffect(() => {
    //     const element = document.querySelector('.triangle');

    //     element.style.top = '50%';
    //     element.style.left = '50%';
    //     element.style.trasform = 'translate(-50%, -50%) rotate(90deq)';

    // }, []);

    //widać opóżnienie w rysowaniu trójkąta na środku dlatego, że jest rysowany po renderze

    useLayoutEffect(() => {
        const element = document.querySelector('.triangle');

        element.style.top = '50%';
        element.style.left = '50%';
        element.style.trasform = 'translate(-50%, -50%) rotate(90deq)';

    }, []);

    //opóźnienia brak trójkąt rysowany przed renderem

    return ( 
        <div className='triangle'></div>
     );
}
 
export default Triangle;