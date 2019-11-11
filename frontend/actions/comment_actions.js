import * as CommentApiUtil from "../util/comment_api_util";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  commentId: comment.id
});

export const createComment = comment => dispatch => (
  CommentApiUtil.createComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
);

export const fetchAllComments = () => dispatch => (
  CommentApiUtil.fetchAllComments().then(comments => dispatch(receiveAllComments(comments)))
);

export const deleteComment = commentId => dispatch => (
  CommentApiUtil.deleteComment(commentId)
  .then(comment => dispatch(removeComment(comment)))
);
