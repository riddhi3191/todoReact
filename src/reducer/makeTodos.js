import {handleActions} from 'redux-actions'

const NEW_TOTO = 'NEW_TODO';

const todoActions = {
    addTodo : (newTodo) => ({
        type: NEW_TOTO,
        newTodo
    }),
    reducer: handleActions({
        [NEW_TOTO] : (state,action) => ({
            ...state,
            newTodo: action.newTodo
        })
    },{
        todos: ['laundry', 'dishes']
    })
}

export default todoActions;