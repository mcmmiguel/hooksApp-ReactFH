

export const toDoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add ToDo':
            return [
                ...initialState,
                action.payload,
            ];
        case '[TODO] Remove ToDo':
            return initialState.filter((todo) => todo.id !== action.payload);

        case '[TODO] Toggle ToDo':
            return initialState.map((todo) => {

                if (todo.id === action.payload) {//payload es el id
                    return {
                        ...todo,
                        done: !todo.done, //Cambiamos el estado del done s
                    };
                }

                return todo;
            })

        default:
            return initialState;
    }
}