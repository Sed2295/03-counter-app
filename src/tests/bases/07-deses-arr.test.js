import { retornaArreglo } from "../../bases/07-deses-arr"

describe('Prueba en 07',()=> {
    test('debe retornar un string y un numero ', () => {
        const arr = retornaArreglo();//['ABC',123]
        expect(arr).toEqual(['ABC',123]);
    })
    
})