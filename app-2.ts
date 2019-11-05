import { Action } from "./ngrx-fake/ngrx";
import * as countActions from "./count/count.actions";

function reducer(state: number, action: Action) {
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

console.log(reducer(10, countActions.incrementAction));
console.log(reducer(10, countActions.decrementAction));
console.log(reducer(10, countActions.multiplyAction));
console.log(reducer(10, countActions.divideAction));
console.log(reducer(10, countActions.resetAction));