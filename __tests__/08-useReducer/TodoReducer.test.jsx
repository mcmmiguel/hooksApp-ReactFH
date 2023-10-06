import { toDoReducer } from "../../src/08-useReducer/ToDoReducer";


describe('Pruebas en ToDoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo TODO',
        done: false,
    }];

    test('Debe de regresar el estado inicial', () => {

        const newState = toDoReducer(initialState, {});

        expect(newState).toBe(initialState);

    });

    test('Debe de agregar un TODO', () => {

        const action = {
            type: '[TODO] Add ToDo',
            payload: {
                id: 2,
                description: 'Nuevo Todo #2',
                done: false,
            }
        };

        const newState = toDoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    test('Debe de eliminar un TODO', () => {

        const action = {
            type: '[TODO] Remove ToDo',
            payload: 2
        };

        const newState = toDoReducer(initialState, action);
        console.log(newState);

        expect(newState.length).toBe(1);

    });

    test('Debe de realizar el toggle del TODO', () => {

        const action = {
            type: '[TODO] Toggle ToDo',
            payload: 1
        };

        const newState = toDoReducer(initialState, action);
        expect(newState[0].done).toBe(true); // Mi solución

        const newState2 = toDoReducer(newState, action);
        expect(newState2[0].done).toBe(false); // Extra de Fer


    });

});