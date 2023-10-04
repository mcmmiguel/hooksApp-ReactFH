import { useEffect, useReducer } from "react"
import { toDoReducer } from "./ToDoReducer"
import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";

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

export const ToDoApp = () => {

    const [todos, dispatch] = useReducer(toDoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);

    }, [todos])


    const handleNewToDo = (todo) => {
        const action = {
            type: '[TODO] Add ToDo',
            payload: todo,
        };

        dispatch(action);
    };


    return (
        <>

            <h1>ToDo App: 10, <small>pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ToDoList todos={todos} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <ToDoAdd onNewToDo={handleNewToDo} />
                </div>

            </div>


        </>
    )
}
