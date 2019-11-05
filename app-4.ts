import { Store, createStore } from 'redux';
import { countReducer } from './count/count.reducer';
import { incrementAction, decrementAction } from './count/count.actions';

const store: Store = createStore(countReducer);

store.subscribe(() => {
    console.log('state: ', store.getState());
});

store.dispatch(incrementAction);
store.dispatch(decrementAction);
