import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
  RECEIVE_FOLLOWS
} from "../actions/user_actions";
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';



const usersReducer = (state ={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    // case RECEIVE_FOLLOW:
    //   // debugger
    //   Object.values(newState).forEach(user => {
    //     if (user.id === action.follow.target_id) {
    //       user.passive_follows.push(action.follow);
    //     }
    //   });
    //   return newState;
    // case REMOVE_FOLLOW:
    //   debugger
    //   Object.values(newState).forEach(user => {
    //     debugger
    //       let follow = Object.values(user.passive_follows).find(
    //         follow => follow.id === action.followId
    //       );
    //       if (follow) {
    //         user.passive_follows.pop(follow);
    //       }
    //     });
    //   // debugger
    //   return newState;

    default:
      return state;
  }
};
export default usersReducer;