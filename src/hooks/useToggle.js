import React, {useState} from 'react';

function useToggle(InitialVal = false){
    const [state, setState] = useState(InitialVal);
    const toggle = ()=>{
        setState(!state);
    }
    return [state, toggle];
}
export default useToggle;