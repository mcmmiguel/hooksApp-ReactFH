import { render, screen } from "@testing-library/react";
import { ToDoApp } from "../../src/08-useReducer/ToDoApp";
import { useToDo } from "../../src/hooks/useToDo";

jest.mock('../../src/hooks/useToDo');

describe('Pruebas en <ToDoApp />', () => {

    useToDo.mockReturnValue({
        todos: [
            { id: 1, description: 'ToDo #1', done: false },
            { id: 2, description: 'ToDo #2', done: true },
        ],
        todosCount: 2,
        todosPending: 1,
        handleNewToDo: jest.fn(),
        handleDeleteToDo: jest.fn(),
        handleToggleToDo: jest.fn(),
    });

    useToDo()

    test('Debe de mostrar el componenete correctamente', () => {

        render(<ToDoApp />);
        // screen.debug();

        expect(screen.getByText('ToDo #1')).toBeTruthy();
        expect(screen.getByText('ToDo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

    });

});