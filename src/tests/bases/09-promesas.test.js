import { getHeroeByIdAsync } from "../../bases/09-promesas"
import heroes from "../../data/heroes";

//done sirve para tareas asincronas
describe('Pruebas con promesas', () => {
    test('debe retornar un heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        })
    });
    test('debe de tener un error si el heroe por id no exisate', (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch( error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    });   
})