import React from 'react';
import ReactDOM from 'react-dom';
import CounterAPP from './CounterApp';
//import PrimeraApp from './PrimeraApp';
import './index.css';

const divRoot = document.querySelector("#app");
ReactDOM.render(<CounterAPP value={10}/>, divRoot);
//ReactDOM.render(<PrimeraApp saludo='Soy goku'/>, divRoot);