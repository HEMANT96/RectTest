import * as ActionTypes from './ActionTypes';

export const addUser = (email, name) =>({
   type: ActionTypes.ADD_USER,
   payload: {
       eamil:email,
       name:name
   }
});