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

    const [state, dispatch] = useReducer(toDoReducer, initialState)


    return (
        <>

            <h1>ToDo App</h1>
            <hr />

            <ul>

                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>

            </ul>

        </>
    )
}
