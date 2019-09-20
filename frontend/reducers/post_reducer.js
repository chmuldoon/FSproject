import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
} from '../actions/post_actions';
import merge from 'lodash/merge';

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    
    case RECEIVE_ALL_POSTS:
      return action.posts;

    case RECEIVE_POST:
      return merge({}, oldState, { [action.post.id]: action.post });

    default:
      return oldState;
  }
};

export default postsReducer;