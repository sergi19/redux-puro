import { Action, Reducer } from './ngrx-fake/ngrx';
import { countReducer } from './count/count.reducer';
import { incrementAction, decrementAction, multiplyAction, divideAction } from './count/count.actions';

export class Store<T> {
    private state: T;
    private reducer: Reducer<T>;

    constructor(reducer: Reducer<T>, state: T) {
        this.reducer = reducer;
        this.state = state;
    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(countReducer, 10); 
console.log('initial state: ', store.getState());

store.dispatch(incrementAction);
console.log('increment state: ', store.getState());
store.dispatch(incrementAction);
console.log('increment state: ', store.getState());

store.dispatch(decrementAction);
console.log('decrement state: ', store.getState());
store.dispatch(decrementAction);
console.log('decrement state: ', store.getState());

store.dispatch(multiplyAction);
console.log('multiply state: ', store.getState());
store.dispatch(multiplyAction);
console.log('multiply state: ', store.getState());

store.dispatch(divideAction);
console.log('divide state: ', store.getState());
store.dispatch(divideAction);
console.log('divide state: ', store.getState());