import { getUser } from "../../bases/05-funciones"

describe('Pruebas 05 funciones', () => {
    test('Get user debe retornar un objeto', () => {
        const userTest = {
            uid:'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    })
    
})