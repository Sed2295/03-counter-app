import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';


describe('Pruebas de counterAPP', () => { 
    const wrapper = shallow(<CounterApp />);   
    test('debe de incrementar el boton +1', () => {
        //buscamos bottones del componente n la posicion 0
        //const btn1 = wrapper.find('button').at(0);
        //Visualizamos el html del boton
        //console.log(btn1.html())
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    })
    
})
