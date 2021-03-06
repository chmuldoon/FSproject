
import merge from "lodash/merge";
import { RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";

const followsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return merge({}, oldState, action.follows);
    
    case RECEIVE_FOLLOW:
      return merge({}, oldState, { [action.follow.id]: action.follow });
    case REMOVE_FOLLOW:
      delete newState[action.followId];
      return newState;
  
    default:
      return oldState;
  }
};

export default followsReducer;