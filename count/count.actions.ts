import { Action } from "../ngrx-fake/ngrx";

// Actions
export const incrementAction: Action = {
    type: 'INCREMENT'
};
export const decrementAction: Action = {
    type: 'DECREMENT'
};
export const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 5
};
export const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
};
export const resetAction: Action = {
    type: 'RESET'
};
