import {USER} from '../shared/Users';
import * as ActionTypes from './ActionTypes';

export const Users = (state = USER, action) => {
    switch(action.type) {
        case ActionTypes.ADD_USER:
            var user = action.payload;
            user.id = state.length;
            return state.concat(user);
        default:
            return state;
    }
}