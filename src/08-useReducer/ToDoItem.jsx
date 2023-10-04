

export const ToDoItem = ({ todo, onDeleteToDo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{todo.description}</span>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteToDo(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}
