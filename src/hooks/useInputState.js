//component
import React, {useState} from 'react';

function useInputState(InitialVal){
    const [state, setState] = useState(InitialVal);
    const handleChange = (evt)=>{
        setState(evt.target.value);
    }
    const reset = ()=>{
        setState("");
    }
    return [state, handleChange, reset];
}
export default useInputState;