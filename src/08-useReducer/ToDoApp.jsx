import { useReducer } from "react"
import { toDoReducer } from "./ToDoReducer"

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


    return (
        <>

            <h1>ToDo App: 10, <small>pendientes: 2</small> </h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group">

                        {
                            todos.map((todo) => (
                                <li key={todo.id} className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">Item 1</span>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="¿Qué hay que hacer?"
                            className="form-control"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Agregar
                        </button>
                    </form>
                </div>

            </div>


        </>
    )
}
