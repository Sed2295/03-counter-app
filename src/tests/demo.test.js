//agrupador general describe
describe('Pruebas del archivo demo.test.js',()=> {
    
    test('deben de ser iguales los string', () => {
        //1.- inicializacion
        const mensaje = 'Hola mundo';
        //2.- estimulo
        const mensaje2 = 'Hola mundo';
        //3.-Observar el comportamiento
        expect(mensaje).toBe(mensaje2); //comparacion que podemos checar en documentacion jestjs.io
    })
 
})
