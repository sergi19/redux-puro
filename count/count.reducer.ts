import { Action } from "../ngrx-fake/ngrx";

export function countReducer(state: number, action: Action) {
    state = 10;
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'MULTIPLY':
            return state * action.payload;
        case 'DIVIDE':
            return state / action.payload;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}