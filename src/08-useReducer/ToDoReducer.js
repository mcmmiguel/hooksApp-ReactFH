

export const toDoReducer = (initialState, action) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('La action.type = ABC no está implementada')

        default:
            return initialState;
    }
}