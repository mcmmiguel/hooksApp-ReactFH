import { ToDoItem } from "./ToDoItem"

export const ToDoList = ({ todos = [], onDeleteToDo }) => {

    return (
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} onDeleteToDo={onDeleteToDo} />
                ))
            }
        </ul>
    )
}
