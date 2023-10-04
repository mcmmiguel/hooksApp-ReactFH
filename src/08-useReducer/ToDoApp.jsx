import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";
import { useToDo } from "../hooks";



export const ToDoApp = () => {

    const { todos, todosCount, todosPending, handleNewToDo, handleDeleteToDo, handleToggleToDo } = useToDo();

    return (
        <>

            <h1>ToDo App: {todosCount}, <small>pendientes: {todosPending}</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ToDoList
                        todos={todos}
                        onDeleteToDo={handleDeleteToDo}
                        onToggleToDo={handleToggleToDo}
                    />
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
