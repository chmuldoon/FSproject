import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
  RECEIVE_FOLLOWS
} from "../actions/user_actions";

import { 
  REMOVE_FOLLOW, 
  RECEIVE_FOLLOW 
} from '../actions/follow_actions';




const usersReducer = (state ={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});   
    case RECEIVE_FOLLOW:
      Object.values(newState).forEach(user => { if (user.id === action.follow.target_id) { user.follows.push({ follower_id: action.follow.follower_id }) } })
      return newState;

    case REMOVE_FOLLOW:
      Object.values(newState).forEach(user => { 
        debugger
        if (user.id === action.follow.target_id) { 
          user.follows.pop({ follower_id: action.follow.follower_id }) 
        } 
      })
      return newState;
  
    default:

      return state;
  }
};
export default usersReducer;