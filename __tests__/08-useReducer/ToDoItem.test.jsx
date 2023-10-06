import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../../src/08-useReducer/ToDoItem";


describe('Pruebas en <ToDoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del tiempo',
        done: false,
    }

    const onDeleteToDoMock = jest.fn();
    const onToggleToDoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el TODO pendiente de completar', () => {

        render(<ToDoItem todo={todo} onDeleteToDo={onDeleteToDoMock} onToggleToDo={onToggleToDoMock} />);

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');

    });

    test('Debe de mostrar el TODO como completado', () => {

        todo.done = true;

        render(<ToDoItem todo={todo} onDeleteToDo={onDeleteToDoMock} onToggleToDo={onToggleToDoMock} />);

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toContain('text-decoration-line-through');

    });

    test('Span debe de llamar al toggleToDo cuando se hace click', () => {


        render(<ToDoItem todo={todo} onDeleteToDo={onDeleteToDoMock} onToggleToDo={onToggleToDoMock} />);

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);

        expect(onToggleToDoMock).toHaveBeenCalledWith(todo.id);

    });

    test('Button debe de llamar al onDeleteToDo cuando se hace click', () => {


        render(<ToDoItem todo={todo} onDeleteToDo={onDeleteToDoMock} onToggleToDo={onToggleToDoMock} />);

        const deleteButton = screen.getByRole('button');

        fireEvent.click(deleteButton);

        expect(onDeleteToDoMock).toHaveBeenCalledWith(todo.id);

    });

});