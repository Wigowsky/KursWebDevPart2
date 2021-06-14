import React from 'react';
import { useParams } from 'react-router-dom'

const Params = () => {

    // z innego komponentu przesyłamy dane poprzez useHistory.push
    // np path="/lokalizacja/:parametr" - nazwa parametru musi się zgadzać

    const paramsObject = useParams({ parametr });

    console.log(paramsObject);

    return ( 
        <div>

        </div>
     );
}
 
export default Params;