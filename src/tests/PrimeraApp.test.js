import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
//import {render} from '@testing-library/react'; para jest
import PrimeraApp from '../PrimeraApp';


describe('Pruebas en primera App', () => {
   /* codigo usando pruebas con jest   
    test('debe mostrar el mensaje hola soy goku', () => {
        const saludo = 'Hola soy Goku';
        const {getByText} = render(<PrimeraApp saludo = {saludo}/>);
        expect ( getByText(saludo) ).toBeInTheDocument();
    })   */
    test('debe de mostrar <PrimeraApp>correctamente', () => {
        const saludo = 'Hola soy goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    })
    test('debe enviar el subtitulo enviado por props', () => {
        const saludo = 'Hola soy goku',
            subtitulo = 'Mi primer parrafo';
        const wrapper = shallow(<PrimeraApp saludo = {saludo} subtitulo={subtitulo}/>)
        //buscamos en el dom la etiqueta p, wrapper nos trae todo lo de <PrimeraAPP/>
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo);
    })
    
       
})
//en consola presionamos u para actualizar un snapshot
