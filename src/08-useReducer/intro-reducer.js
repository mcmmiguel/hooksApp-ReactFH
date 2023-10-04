
// Initial state
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}]

const toDoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') { // We control our actions with conditional statements
        return [...state, action.payload];
    }

    return state; // If anything happens we return the same state without modifications
}


let todos = toDoReducer();


// We want to add a new object to the state
const newTodo = {
    id: 2,
    todo: 'Recolectar la gema del espacio',
    done: false,
};


// We define our action with its type and payload. The payload is what we want to add
const addToDoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

// We add our newTodo through our actions. That's the way to return a new state
todos = toDoReducer(todos, addToDoAction);

console.log('STATE:', todos);


// !!!!!! No se debe mutar el state !!!!!!
// todos.push({
//     id: 2,
//     todo: 'Recolectar la gema del espacio',
//     done: false,
// });