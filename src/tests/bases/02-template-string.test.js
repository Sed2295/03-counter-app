import '@testing-library/jest-dom';
import { getSaludo } from '../../bases/02-template-string';

describe('Preuebas en 02-template-string',()=> {
    test('getSaludo debe de retornar Hola Fernando', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre)

        expect(saludo).toBe('Hola '+ nombre);
    })    
})