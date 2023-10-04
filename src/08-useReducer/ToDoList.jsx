import { ToDoItem } from "./ToDoItem"

export const ToDoList = ({ todos = [], onDeleteToDo, onToggleToDo }) => {

    return (
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteToDo={onDeleteToDo}
                        onToggleToDo={onToggleToDo} />
                ))
            }
        </ul>
    )
}
