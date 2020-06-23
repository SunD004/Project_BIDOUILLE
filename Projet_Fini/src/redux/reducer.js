import { ADD, SUB } from './constant'
import { act } from 'react-test-renderer'

const initialState = {
    counter: 0,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state, counter: state.counter + 1
            }
        case SUB:
            return {
                ...state, counter: state.counter - 1
            }
        default:
            return state
    }
}