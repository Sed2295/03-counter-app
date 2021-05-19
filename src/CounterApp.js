import React,{useState} from 'react';
import PropTypes from 'prop-types';

const CounterAPP = ({value=10}) => {
    const [counter,setCounter] = useState(value);
    
    //handelAdd les puedes poner el nombre que quieras
    const handleAdd = () => {
       setCounter(counter + 1);
    }
    const reset = () => {
        setCounter(value);
     }
     const restar = () => {
        setCounter(counter -1);
     }

    return(
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd} >+1</button>
            <button onClick={reset} >Reset</button>
            <button onClick={restar} >-1</button>
        </>
    )
}

CounterAPP.propTypes = {
    value:PropTypes.number
}
export default CounterAPP;