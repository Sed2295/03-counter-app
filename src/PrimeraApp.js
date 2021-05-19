import React from 'react';
//import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
const PrimeraApp = ({ saludo,subtitulo }) => {
    /* const saludo = {
        nombre:'Alfredo',
        edad: 25
    } */
    /* if(!saludo)
        throw new Error('El saludo es necesario') */
    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre>{ JSON.stringify(saludo,null,3) }</pre>*/}
            <p>Mi primer parrafo</p>
        </>        
    ); 
}
//Obligamos que cuando se necesite utilizar el componente venga con el tipado que necesitamos esto con propTypes
PrimeraApp.propTypes = {
    saludo:PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo : 'Soy un subtitulo',

}
export default PrimeraApp;