

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}]

const toDoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
}


let todos = toDoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la gema del espacio',
    done: false,
};

const addToDoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = toDoReducer(todos, addToDoAction);

console.log('STATE:', todos);


// !!!!!! No se debe mutar el state !!!!!!
// todos.push({
//     id: 2,
//     todo: 'Recolectar la gema del espacio',
//     done: false,
// });