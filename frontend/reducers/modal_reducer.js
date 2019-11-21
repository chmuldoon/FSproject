import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_SHOW_MODAL,
  OPEN_LIST_MODAL
} from "../actions/modal_actions";
import merge from "lodash/merge";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

export default function modalReducer(state = [], action){
  Object.freeze(state);
      let newState = merge({}, state);

  switch (action.type) {
    case OPEN_MODAL:
      return { modal: action.modal };
    case CLOSE_MODAL:
      return null;
    case OPEN_SHOW_MODAL:
      return { modal: action.modal, post: action.post };
    case OPEN_LIST_MODAL:
      return { modal: action.modal, list: action.list, kind: action.kind };
    case RECEIVE_LIKE:
      Object.values(newState).forEach(post => {
        if (post.id === action.like.post_id) {
          // debugger
          post.likes.push({ user_id: action.like.user_id });
        }
      });
      return newState;
    case REMOVE_LIKE:
      Object.values(newState).forEach(post => {
        if (post.id === action.like.post_id) {
          // debugger
          post.likes.pop({ user_id: action.like.user_id });
        }
      });
      return newState;
    case RECEIVE_COMMENT:
      // debugger
      // const post = Object.values(newState).filter(post => post.id === action.comment.post_id)[0];
      if (
        Object.values(newState).filter(
          post => post.id === action.comment.post_id
        )[0]
      ) {
        // debugger
        const post = Object.values(newState).filter(
          post => post.id === action.comment.post_id
        )[0];
        post.comments.push(action.comment);
        return newState;
      }
    // const post = Object.values(newState)[1];
    // debugger
    // post.comments.push(action.comment);
    // return newState
    default:
      return state;
  }
}
