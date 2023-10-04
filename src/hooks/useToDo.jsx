import { useEffect, useReducer } from "react";
import { toDoReducer } from "../08-useReducer/ToDoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la gema del alma',
    //     done: false,
    // },

];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useToDo = () => {

    const [todos, dispatch] = useReducer(toDoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewToDo = (todo) => {
        const action = {
            type: '[TODO] Add ToDo',
            payload: todo,
        };

        dispatch(action);
    };

    const handleDeleteToDo = (id) => {
        dispatch({
            type: '[TODO] Remove ToDo',
            payload: id,
        });
    };

    const handleToggleToDo = (id) => {
        dispatch({
            type: '[TODO] Toggle ToDo',
            payload: id,
        });
    };

    const todosCount = todos.length;
    const todosPending = todos.filter(todo => !todo.done).length;

    return {
        todos,
        handleNewToDo,
        handleDeleteToDo,
        handleToggleToDo,
        todosCount,
        todosPending,
    }
}
