import { createStore, combineReducers} from 'redux';
import {Users} from './users';

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
        user:Users,
      }) 
    );

    return store;
}