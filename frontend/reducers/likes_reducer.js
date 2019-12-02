import { RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_ALL_LIKES } from "../actions/like_actions";
import merge from 'lodash/merge';


const likesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return merge({}, oldState, action.likes);

    case RECEIVE_LIKE:
      return merge({}, state, { [action.like.id]: action.like });
    case REMOVE_LIKE:
      let newState = merge({}, state);
      delete newState[action.like.id];
      return newState;
    default:
      return state;
  }
};
export default likesReducer;

