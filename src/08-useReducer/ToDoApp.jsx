import { useReducer } from "react"
import { toDoReducer } from "./ToDoReducer"
import { ToDoItem } from "./ToDoItem";
import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la gema del alma',
        done: false,
    },
    {
        id: new Date().getTime() + 100,
        description: 'Recolectar la gema de la realidad',
        done: false,
    },
];

export const ToDoApp = () => {

    const [todos, dispatch] = useReducer(toDoReducer, initialState)

    const handleNewToDo = (todo) => {
        console.log(todo);
    }

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
